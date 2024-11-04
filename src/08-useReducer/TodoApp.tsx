import { TodoLists } from './TodoLists'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks/useTodos'

export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
        useTodos()

    return (
        <>
            <h1>Todo App</h1>

            <hr />

            <div className="flex">
                <div className="w-[50%] p-3">
                    <TodoLists
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="w-50 p-3">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <div>
                        <TodoAdd onNewTodo={handleNewTodo} />
                    </div>
                </div>
            </div>
        </>
    )
}
