import { memo } from 'react'

export const Hijo = memo(
    ({
        numero,
        incrementar,
    }: {
        numero: number
        incrementar: (value: number) => void
    }) => {
        console.log('  Me volví a generar :(  ')

        return (
            <button
                className="p-4 bg-blue-500 rounded-md text-white hover:bg-blue-700 mx-1 mt-5"
                onClick={() => incrementar(numero)}
            >
                {numero}
            </button>
        )
    }
)
