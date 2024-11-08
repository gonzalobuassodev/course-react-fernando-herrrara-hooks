import { fireEvent, render, screen } from "@testing-library/react";

import { TodoItem } from "../../src/08-useReducer/TodoItem";
import React from "react";
describe("Test of todoItem", () => {
    const todo = {
        id: 1,
        description: "Piedra del alma",
        done: false,
    };

    const handleDeleteTodoMock = jest.fn();
    const handleToggleTodoMock = jest.fn();

    beforeAll(() => {
        jest.clearAllMocks();
    });

    test("should show the todo pending to complete", () => {
        render(
            <TodoItem
                todo={todo}
                handleDeleteTodo={handleDeleteTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        const liElement = screen.getByRole("listitem");
        const spanElement = screen.getByLabelText("span");

        expect(liElement.className).toBe(
            "w-full border flex justify-between items-center p-2"
        );
        expect(spanElement.className).toContain("text-black");
        // screen.debug();
    });

    test('should show the complete componennt when the todo is done', () => {

        todo.done = true;

        render( <TodoItem todo={todo} handleDeleteTodo={handleDeleteTodoMock} handleToggleTodo={handleToggleTodoMock} />);

        const liElement = screen.getByLabelText('span');

        expect(liElement.className).toContain('line-through')

        // screen.debug();

    });

    test('should call toogleTodo when click on the label', () => {

        render( <TodoItem todo={todo} handleDeleteTodo={handleDeleteTodoMock} handleToggleTodo={handleToggleTodoMock} />);

        const liElement = screen.getByLabelText('span');
        fireEvent.click(liElement);

        expect(handleToggleTodoMock).toHaveBeenCalledWith(todo.id)
    });

    test('should call deleteTodo when click on delete button', () => { 
        render( <TodoItem todo={todo} handleToggleTodo={handleToggleTodoMock} handleDeleteTodo={handleDeleteTodoMock} /> );

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect( handleDeleteTodoMock).toHaveBeenCalledWith(todo.id)
     })
});

