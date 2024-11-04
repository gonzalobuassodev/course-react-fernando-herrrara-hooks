import { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        inputRef.current?.select()
        console.log(inputRef)
    }
    return (
        <div className="flex flex-col w-40">
            <h1>Focus Screen</h1>

            <input
                ref={inputRef}
                className="p-2 bg-slate-200 rounded-md"
                placeholder="ingrese su nombre"
                type="text"
            />

            <button onClick={handleClick} className="p-2 bg-blue-500">
                Set Focus
            </button>
        </div>
    )
}
