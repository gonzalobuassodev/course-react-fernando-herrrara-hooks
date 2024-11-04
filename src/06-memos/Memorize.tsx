import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <div className="pl-5">
            <h1>
                Counter: <Small value={counter} />
            </h1>
            <hr />

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
