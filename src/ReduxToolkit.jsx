import { useDispatch, useSelector } from "react-redux"
import { increment } from "./store/slices/counter";

export const ReduxToolkit = () => {

  const {counter} = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>ReduxToolkit</h1>
      <hr />

      <h3>{counter}</h3>

      <button
        onClick={()=>dispatch(increment())}
      >
        +1
      </button>

    </>
  )
}
