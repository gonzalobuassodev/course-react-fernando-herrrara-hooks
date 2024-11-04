import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterationNumber: number = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos...')
    }

    return `${iterationNumber} iterations done`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000)
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <div className="pl-5">
            <h1>
                Counter: <small>{counter}</small>
            </h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button
                className="p-3 bg-blue-600 text-white hover:bg-blue-700 rounded-md mt-5"
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
                className="p-5 bg-blue-500 text-white rounded-md"
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
