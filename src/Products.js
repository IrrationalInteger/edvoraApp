import "./styles.css";
function Products(props) {
  return (
    <>
      {props.products.map((product) => (
        <div key={product.product_id} className="dataBox">
          {"Name: " +
            product.name +
            ", Stock: " +
            product.stock +
            ", Selling Price: " +
            product.selling_price}{" "}
        </div>
      ))}
    </>
  );
}
export default Products;
