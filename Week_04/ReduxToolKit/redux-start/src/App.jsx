import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/slices/cartSlice";
import Products from "./pages/products";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log({ cart });
  const product = {
    name: "Laptop",
    category: "Electricity",
    id: cart?.length + 1,
  };
  return (
    <>
      Hi
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <br />
      <Products />
    </>
  );
}

export default App;
