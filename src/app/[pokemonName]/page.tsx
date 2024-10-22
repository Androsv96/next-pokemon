import { PokemonDetails } from "@/app/interfaces";
import DetailedPokemon from "@/app/[pokemonName]/_components/DetailedPokemon";

interface Props {
  params: {
    pokemonName: string;
  };
}

export default async function Pokemon({ params }: Props) {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );

  const pokemonDetails: PokemonDetails = await data.json();
  return <DetailedPokemon pokemonData={pokemonDetails} />;
}
