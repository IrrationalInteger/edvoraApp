import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import Users from "./Users.js";
import Products from "./Products.js";
import Orders from "./Orders.js";
import { useEffect } from "react";

function Results() {
  const location = useLocation();
  const items = location.state;
  const navigate = useNavigate();
  useEffect(() => {
    if (items === null) navigate("/");
    else if (Object.keys(items[0]).length === 0) navigate("/");
  }, [items, navigate]);
  if (items === null) return;
  return (
    <div className="box" id="style-1" style={{ display: "block" }}>
      {location.pathname === "/users" ? (
        <>
          <p>
            <b>Users</b>
          </p>
          <Users users={items}></Users>
        </>
      ) : location.pathname === "/products" ? (
        <>
          <p>
            <b>Products</b>
          </p>
          <Products products={items}></Products>
        </>
      ) : (
        <>
          {" "}
          <p>
            <b>Orders</b>
          </p>
          <Orders orders={items}></Orders>
        </>
      )}
    </div>
  );
}
export default Results;
