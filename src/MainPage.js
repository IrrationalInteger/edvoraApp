import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
function MainPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([{}]);
  const [products, setProducts] = useState([{}]);
  const [orders, setOrders] = useState([{}]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      });
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
    fetch("https://assessment.api.vweb.app/orders")
      .then((res) => res.json())
      .then((json) => {
        setOrders(json);
      });
  }, []);
  let countOfUsers = Object.keys(users).length;
  let countOfProducts = Object.keys(products).length;
  let countOfOrders = Object.keys(orders).length;
  let averageProductPrice = 0;

  for (let item of products) {
    averageProductPrice += item.selling_price;
  }
  averageProductPrice = averageProductPrice / countOfProducts;
  let joinResult = join(products, orders);

  let values = [];
  for (let item of joinResult) {
    values.push(item.name);
  }
  let mostOrderedProduct = mode(values);
  function mode(arr) {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }

  function join(obj1, obj2) {
    let m = new Map();
    let result = [];
    obj1.forEach(function (x) {
      m.set(x.product_id, x);
    });

    obj2.forEach(function (x) {
      let existing = m.get(x.product_id);
      if (existing !== undefined) result.push({ ...existing, ...x });
    });
    return result;
  }

  function toUsers() {
    navigate("./users", { state: users });
  }
  function toProducts() {
    navigate("./products", { state: products });
  }
  function toOrders() {
    navigate("./orders", { state: joinResult });
  }
  console.log(users);
  return (
    <div className="box">
      <div style={{ margin: "20px" }}>
        {"Number of Users: " +
          countOfUsers +
          ", Number of Products: " +
          countOfProducts +
          ", Number of Orders: " +
          countOfOrders}
      </div>
      <div>
        {"Average Product Price: " +
          averageProductPrice +
          ", Most Ordered Product: " +
          mostOrderedProduct}
      </div>
      <div className="buttonBox">
        <button className="button-40" onClick={toUsers}>
          View Users
        </button>
        <button className="button-40" onClick={toProducts}>
          View Products
        </button>
        <button className="button-40" onClick={toOrders}>
          View Orders
        </button>
      </div>
    </div>
  );
}

export default MainPage;
