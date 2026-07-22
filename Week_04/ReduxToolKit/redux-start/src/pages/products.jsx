import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

function Products() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (products?.length === 0) return <>No products</>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product?.id}>
          <h4>Name : {product?.name}</h4>
          <h4>Category : {product?.category}</h4>
          <button onClick={() => dispatch(removeFromCart(product?.id))}>
            Delete this product
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
