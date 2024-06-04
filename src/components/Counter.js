import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  //we dont pass any argument to the useDispatch() but the dispatch returns a dispatch function which we can use to dispatch the action
  const dispatch = useDispatch();

  // useSector  execute a function provided by the redux which is the state that redux holds and return tha part/slice of that state in this case counter
  // useSelector automatically subscribe the stor to this
  //  component ie whenever the state will change the
  // component will  be made aware that the state has been changed
  //  and  useSelector will always give u the latest value .
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    // dispatch({ type: "increment" }); //dispatch is returned via useDispatch
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(10));
    // dehind the scean==> {type:SomeUniqueIdentifier,payload}  ==>payload is the argument of increase
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by five</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
