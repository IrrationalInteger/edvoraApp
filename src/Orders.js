import "./styles.css";
function Orders(props) {
  return (
    <>
      {props.orders.map((order) => (
        <div key={order.order_id} className="dataBox">
          {"Product Name: " +
            order.name +
            ", Quantity: " +
            order.quantity +
            ", Price: " +
            order.selling_price * order.quantity +
            ", User ID: " +
            order.user_id +
            ", Order Date: " +
            order.order_date}{" "}
        </div>
      ))}
    </>
  );
}
export default Orders;
