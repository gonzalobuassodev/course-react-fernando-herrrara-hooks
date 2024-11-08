import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import React from "react";
import { UserContext, User } from "../../src/09-useContext/context/UserContext";
describe("Test of HomePage", () => {

    const user = {
        id: 1,
        name: 'Gonzalo',
        email: 'gonzalobuasso@gmail.com'
    }
    test("should show the components without the user", () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe('null')
        // screen.debug();
    });

    test('should show the component with the user', () => { 
        
        render(
            <UserContext.Provider value={{ user, setUser: jest.fn()}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3))
        expect(preTag.innerHTML).toContain(`${user.id}`)

        // screen.debug();
     })
});
