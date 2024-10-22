"use client";

import { useEffect, useState } from "react";
import { BasePokemonData } from "@/app/interfaces";
import { PokemonCard } from "@/app/_components/PokemonCard";
import { usePokemonStore } from "@/store";
import { POKEMON_LIMIT } from "@/app/utilities/constants";
import Pagination from "@/app/_components/Pagination";

interface PokemonResults {
  name: string;
  url: string;
}

const Dashboard = () => {
  const currentPokemonPage = usePokemonStore((state) => state.currentPage);
  const setCount = usePokemonStore((state) => state.setCount);
  const [pokemonsData, setPokemonsData] = useState<
    PokemonResults[] | undefined
  >(undefined);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonRaw = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}&offset=${currentPokemonPage}`
      );
      const basicPokemons: BasePokemonData = await pokemonRaw.json();
      setCount(basicPokemons.count || 0);
      setPokemonsData(basicPokemons.results || []);
    };
    getPokemons().catch((err) => console.log(err));
  }, [currentPokemonPage]);

  return (
    <main className="py-2 sm:p-6">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid p-4 gap-16 items-center justify-items-center">
        {pokemonsData &&
          pokemonsData.length > 0 &&
          pokemonsData.map((pokemon, idx) => (
            <PokemonCard
              key={idx}
              pokemonName={pokemon.name}
              pokemonUrl={pokemon.url}
            />
          ))}
      </div>

      <Pagination />
    </main>
  );
};

export default Dashboard;
