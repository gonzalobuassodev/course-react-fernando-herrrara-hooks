import { useCounter } from '../hooks'
import { useFetch } from '../hooks/useFetch'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHook = () => {
    // fetch(`https://pokeapi.co/api/v2/pokemon/1`)

    const { counter, increment, decrement } = useCounter(1)

    const { data, hasError, isLoading } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${counter}`
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>MultipleCustomHook</div>

            <div>{data && <PokemonCard 
            id={data.id} 
            name={data.name} 
            sprites={[ data.sprites ]} />}</div>

            <button
                onClick={() => counter > 0 && decrement(1)}
                className="p-4 bg-blue-500 m-5 rounded-md text-white hover:bg-blue-900"
            >
                Anterior
            </button>
            <button
                onClick={() => increment(1)}
                className="p-4 bg-blue-500 m-5 rounded-md text-white hover:bg-blue-900"
            >
                Posterior
            </button>
        </>
    )
}
