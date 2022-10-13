import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy } from "./store/slices/counter";

export const ReduxToolkit = ({incrementValue}) => {

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

      <button
        onClick={()=>dispatch(decrement())}
      >
        -1
      </button>

      <button
        onClick={()=>dispatch(incrementBy(incrementValue))}
      >
        +{incrementValue}
      </button>



    </>
  )
}
