import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/slice/counterSlice";

const UserInterface = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Click any button to show its effect</h1>
        <button onClick={() => dispatch(incrementCounter())}>
          Increment Value is: {count}
        </button>{" "}
        <br />
        <br />
        <button onClick={() => dispatch(decrementCounter())}>
          Decrement Value is: {count}
        </button>
      </div>
    </>
  );
};

export default UserInterface;
