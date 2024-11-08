import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import React from "react";
import * as hooks from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Test of todoApp", () => {
    const mockUseTodos = hooks.useTodos as jest.MockedFunction<
        typeof hooks.useTodos
    >;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const todoMock = [
        { id: 1, description: "Todo #1", done: false },
        { id: 2, description: "Todo #2", done: false },
        { id: 3, description: "Todo #3", done: false },
    ];

    const mockReturn = {
        todos: todoMock,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    };

    mockUseTodos.mockReturnValue(mockReturn);

    test("should show the component correctly", () => {
        render(<TodoApp />);
        // screen.debug();
        expect(screen.getByText("Todo #1")).toBeTruthy();
        expect(screen.getByText("Todo #2")).toBeTruthy();
        expect(screen.getByText("Todo #3")).toBeTruthy();

        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});
