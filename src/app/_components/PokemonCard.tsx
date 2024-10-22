"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PokemonDetails } from "@/app/interfaces";

interface Props {
  pokemonName: string;
  pokemonUrl: string;
}

export const PokemonCard: React.FC<Props> = ({ pokemonName, pokemonUrl }) => {
  const router = useRouter();

  const [pokemonData, setPokemonData] = useState<PokemonDetails | undefined>(
    undefined
  );

  const onPokemonClick = (pokemonName: string) => {
    router.push(`/${pokemonName}`);
  };

  useEffect(() => {
    try {
      const getDetails = async () => {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemonData(data);
      };
      getDetails();
    } catch (e) {
      console.error(e);
    }
  }, [pokemonUrl]);

  const getBgGradiendByType = (): string => {
    switch (pokemonData?.types[0].type.name) {
      case "fire":
        return "bg-gradient-to-b from-fire to-gray-300";

      case "grass":
        return "bg-gradient-to-b from-grass to-gray-300";

      case "water":
        return "bg-gradient-to-b from-water to-gray-300";

      case "bug":
        return "bg-gradient-to-b from-bug to-gray-300";

      case "normal":
        return "bg-gradient-to-b from-normal to-gray-300";

      case "poison":
        return "bg-gradient-to-b from-poison to-gray-300";

      case "ground":
        return "bg-gradient-to-b from-ground to-gray-300";

      case "fighting":
        return "bg-gradient-to-b from-fighting to-gray-300";

      case "psychic":
        return "bg-gradient-to-b from-psychic to-gray-300";

      case "rock":
        return "bg-gradient-to-b from-rock to-gray-300";

      case "electric":
        return "bg-gradient-to-b from-electric to-gray-300";

      case "ghost":
        return "bg-gradient-to-b from-ghost to-gray-300";

      case "ice":
        return "bg-gradient-to-b from-ice to-gray-300";

      case "dragon":
        return "bg-gradient-to-b from-dragon to-gray-300";

      case "dark":
        return "bg-gradient-to-b from-dark to-gray-300";

      case "steel":
        return "bg-gradient-to-b from-steel to-gray-300";

      default:
        return "bg-gray-300";
    }
  };

  const getBgByType = () => {
    switch (pokemonData?.types[0].type.name) {
      case "fire":
        return "bg-fire";

      case "grass":
        return "bg-grass";

      case "water":
        return "bg-water";

      case "bug":
        return "bg-bug";

      case "normal":
        return "bg-normal";

      case "poison":
        return "bg-poison";

      case "ground":
        return "bg-ground";

      case "fighting":
        return "bg-fighting";

      case "psychic":
        return "bg-psychic";

      case "rock":
        return "bg-rock";

      case "electric":
        return "bg-electric";

      case "ghost":
        return "bg-ghost";

      case "ice":
        return "bg-ice";

      case "dragon":
        return "bg-dragon";

      case "dark":
        return "bg-dark";

      case "steel":
        return "bg-steel";

      default:
        return "bg-gray-600";
    }
  };

  const hpStat = pokemonData?.stats.find((stat) => stat.stat.name === "hp");
  const attackStat = pokemonData?.stats.find(
    (stat) => stat.stat.name === "attack"
  );
  const speedStat = pokemonData?.stats.find(
    (stat) => stat.stat.name === "speed"
  );
  const defenseStat = pokemonData?.stats.find(
    (stat) => stat.stat.name === "defense"
  );

  return (
    <div
      className={`rounded-lg p-4 text-white flex flex-col items-center relative bg-gradient-to-b hover:cursor-pointer w-[250px] ${getBgGradiendByType()}`}
      onClick={() => onPokemonClick(pokemonName)}
    >
      {hpStat && (
        <div className="flex gap-1 self-start rounded-xl bg-gray-600 px-4">
          <span className="text-red-400 font-bold">HP</span>
          <span>{hpStat.base_stat}</span>
        </div>
      )}
      {pokemonData && (
        <Image
          src={pokemonData?.sprites.front_default}
          alt="pokemonFrontImg"
          width={150}
          height={150}
          priority
        />
      )}
      <h1 className="text-2xl font-bold capitalize text-black">
        {pokemonName}
      </h1>

      <div className="flex gap-2 mt-4">
        {pokemonData?.types.map((data, idx) => (
          <p
            key={idx}
            className={`text-white rounded-xl px-2 text-sm font-semibold ${getBgByType()}`}
          >
            {data.type.name}
          </p>
        ))}
      </div>

      <div className="flex justify-between w-full text-center text-black mt-4">
        {attackStat && (
          <div className="flex flex-col">
            <span className="font-semibold">{attackStat.base_stat}</span>
            <span>Attack</span>
          </div>
        )}
        {defenseStat && (
          <div className="flex flex-col">
            <span className="font-semibold">{defenseStat.base_stat}</span>
            <span>Defense</span>
          </div>
        )}
        {speedStat && (
          <div className="flex flex-col">
            <span className="font-semibold">{speedStat.base_stat}</span>
            <span>Speed</span>
          </div>
        )}
      </div>
    </div>
  );
};
