"use client";
import { POKEDEX } from "@/pokemon/pokedex";
import PokemonSelectorCard from "@/components/PokemonSelectorCard";
import type { GenericPokemon } from "@/types/pokemon.types";
import css from "./PokemonSelectionGrid.module.css"

export default function PokemonSelectionGrid() {
  const handleSelectPokemon = (pkmn: GenericPokemon) => {};

  return (
    <div className={css.pokemon_selection_holder}>
      {Object.entries(POKEDEX).map(([key, pokemon]) => (
        <PokemonSelectorCard
          onClick={() => handleSelectPokemon(pokemon)}
          key={key}
          pokemon={pokemon}
        ></PokemonSelectorCard>
      ))}
    </div>
  );
}
