// CallbackHook.js
import { useState, useCallback, memo } from 'react'
// import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback((value: number) => {
        console.log('increment')
        setCounter((c) => c + value)
    }, [])

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}

export const ShowIncrement = memo(
    ({ increment }: { increment: (value: number) => void }) => {
        console.log('me volvi a generar')
        return (
            <button
                className="p-5 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={() => increment(5)}
            >
                Incrementar
            </button>
        )
    }
)
