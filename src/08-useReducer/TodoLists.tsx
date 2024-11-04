import { Todo } from './interfaces'
import { TodoItem } from './TodoItem'

export const TodoLists = ({
    todos,
    handleDeleteTodo,
    handleToggleTodo,
}: {
    todos: Todo[]
    handleDeleteTodo: (id: number) => void
    handleToggleTodo: (id: number) => void
}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleTodo={handleToggleTodo}
                />
            ))}
        </ul>
    )
}
