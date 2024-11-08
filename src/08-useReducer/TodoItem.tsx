import { Todo } from './interfaces'

export const TodoItem = ({
    todo,
    handleDeleteTodo,
    handleToggleTodo,
}: {
    todo: Todo
    handleDeleteTodo: (id: number) => void
    handleToggleTodo: (id: number) => void
}) => {
    const handleDelete = () => {
        handleDeleteTodo(todo.id)
    }

    return (
        <li
            key={todo.id}
            className="w-full border flex justify-between items-center p-2"
        >
            <span
                className={`text-black ${todo.done ? 'line-through' : ''}`}
                onClick={() => handleToggleTodo(todo.id)}
                aria-label='span'
            >
                {todo.description}
            </span>

            <button
                onClick={handleDelete}
                className="p-1 bg-red-500 rounded-md"
            >
                <span className="text-white">Eliminar</span>
            </button>
        </li>
    )
}
