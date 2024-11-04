import { memo } from 'react'

export const ShowIncrement = memo(
    ({ increment }: { increment: (value: number) => void }) => {
        console.log('me volvi a generar')
        return (
            <button
                className="p-5 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={() => increment(1)}
            >
                Incrementar
            </button>
        )
    }
)
