import { render, screen } from "@testing-library/react";
import React from "react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";
describe("Test of MainApp", () => {
    test("sould show the HomePage components", () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();

        // screen.debug();
    });

    test('should show the LoginPage components', () => {
        render(
            <MemoryRouter initialEntries={(['/login'])}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('should show the AboutPage components', () => {
        render(
            <MemoryRouter initialEntries={(['/about'])}>
                <MainApp />
            </MemoryRouter>
        )
        expect(screen.getByText('AboutPage')).toBeTruthy();
        
    });
});
