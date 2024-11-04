import { ChangeEvent, FormEvent, useState } from 'react'

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo: any) => void }) => {
    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!value) return

        const newTodo = {
            id: new Date().getTime(),
            description: value,
            done: false,
        }

        onNewTodo(newTodo)

        setValue('')
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="p-2 bg-slate-200 rounded-md"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <button
                className="p-3 bg-blue-500 rounded-md text-white"
                type="submit"
            >
                Agregar
            </button>
        </form>
    )
}
