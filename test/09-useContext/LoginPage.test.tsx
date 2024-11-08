import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import React from "react";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Test of LoginPage", () => {
    const user = {
        id: 123,
        name: "Gonzalo Buasso",
        email: "gonzalobuasso@gmail.com",
    };

    test("should show the component without the user", () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        expect(screen.getByRole("heading")).toBeTruthy();
        // console.log(screen.getByRole('heading'));
    });

    test("should call setUser", () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole("button");
        expect(button).toBeTruthy();
        // console.log(button);
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith(user);
        // screen.debug();
    });
});
