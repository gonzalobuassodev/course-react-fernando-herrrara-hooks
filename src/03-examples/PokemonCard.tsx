import { Sprites } from "../interfaces";

interface Props{
    id: number;
    name: string;
    sprites: Sprites[];
}


export const PokemonCard = ({id, name, sprites}: Props) => {

    console.log(id, name)
    // console.log(sprites)

  return (
    <section className="p-5 border-2 w-60 h-60">
        <h2>#{id} - {name}</h2>
        {
            sprites.map((sprite) => (
                <>
                <img src={sprite.front_default} alt={sprite.front_default} />
                <img src={sprite.back_default} alt={sprite.back_default} />
                </>
            ))
        }

    </section>
  )
}
