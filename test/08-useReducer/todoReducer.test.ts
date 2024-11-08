import { act } from 'react';
import { todoReducer } from '../../src/08-useReducer/todoReducer';
describe('Test todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test("should return the initial state", () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);

        expect(true).toBe(true);
    });

    test('should add a todo', () => { 
        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'Nuevo todo 2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
     })

     test('should delete a todo', () => { 

        const action = {
            type: 'DELETE_TODO',
            payload: 1
        }

        const state = todoReducer(initialState, action);

        expect(state.length).toBe(0);

      })

      test('should toogle a todo', () => { 
        const action = {
            type: 'TOGGLE_TODO',
            payload: 1
        };

        const state = todoReducer(initialState, action);
        expect(state[0].done).toBeTruthy();
        
        const state2 = todoReducer(state, action);
        expect(state2[0].done).toBeFalsy();

       })
});