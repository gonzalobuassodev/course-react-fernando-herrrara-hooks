import { renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';
import { act, ChangeEvent } from "react";

describe('Prueba del useForm hook', () => {

    const initialForm = {
        name: 'Gonzalo',
        email: 'gonzalobuasso@gmail.com',
        password: '123456'
    }

    test('should return of the default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        // console.log(result.current)

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            password: initialForm.password,
            formState: { name: 'Gonzalo', email: 'gonzalobuasso@gmail.com', password: '123456' },
            handleChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('should change the value of the form', () => {

        const newValue = 'Gonzalo Buasso';
        const { result } = renderHook(() => useForm(initialForm))
        const { handleChange } = result.current;
        // console.log(result)

        const e: ChangeEvent<HTMLInputElement> = {
            target: {
                name: 'name',
                value: newValue
            }
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            handleChange(e)
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
    })

    test('should reset the form', () => {
        const newValue = 'Gonzalo Buasso';
        const { result } = renderHook(() => useForm(initialForm));

        const { handleChange, onResetForm } = result.current;

        const e: ChangeEvent<HTMLInputElement> = {
            target: {
                name: 'name',
                value: newValue
            }
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            handleChange(e);
            onResetForm();
        })

        expect(result.current.name).toBe('')
        expect(result.current.formState.name).toBe('')
    })


});