import "./App.css";
// import counterReducer from "./redux/slices/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slices/counter";
import CounterValue from "./counterValue";
import AddTodo from "./components/AddTodo";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className="App">
      {count}
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Amont 5</button>
      <CounterValue />

      <AddTodo />
    </div>
  );
}

export default App;
