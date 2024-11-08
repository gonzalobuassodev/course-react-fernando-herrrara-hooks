import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter hook', () => {

    test('debe de retornar el valor por defecto', () => {
        const { result } = renderHook(() => useCounter())
        // console.log(result.current)
        const { counter, increment, decrement, reset } = result.current

        expect(counter).toBe(1)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('should generar el counter el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100))
        // console.log(result.current)
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(100)
    })

    test('should increase the counter', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, increment } = result.current;
        // console.log(result)
        act(() => {
            increment()
        })

        expect(result.current.counter).toBe(101)

    })

    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(100))

        const { counter, decrement } = result.current;

        act(() => {
            decrement();
        })

        expect(result.current.counter).toBe(99)

    })

    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter(10));

        const { counter, reset } = result.current;

        act(() => {
            reset();
        })

        expect(result.current.counter).toBe(0)
    })
});