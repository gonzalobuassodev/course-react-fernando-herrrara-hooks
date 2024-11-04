import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();
  return (
    <div className="p-5">
        <h1>Counter with custom hook: {counter}</h1>

        <hr />

        <button onClick={() =>increment(2)} className="p-3 bg-blue-600 hover:bg-blue-800 text-white m-3">+1</button>
        <button onClick={reset} className="p-3 bg-blue-600 hover:bg-blue-800 text-white m-3">reset</button>
        <button onClick={decrement} className="p-3 bg-blue-600 hover:bg-blue-800 text-white m-3">-1</button>
        


    </div>
  )
}
