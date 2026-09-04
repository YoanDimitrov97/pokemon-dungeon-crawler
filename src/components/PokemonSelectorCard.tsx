"use client";
import type { GenericPokemon } from "@/types/pokemon.types";
import css from "./PokemonSelectorCard.module.css";
interface PokemonSelectorCardProps {
  pokemon: GenericPokemon;
  onClick?: () => void;
}

export default function PokemonSelectorCard({
  pokemon,
  onClick,
}: PokemonSelectorCardProps) {
  return (
    <div className={css.pokemon_card} onClick={onClick}>
      <div className={css.top_part}>
        <span>{pokemon.name}</span>
        <small>{pokemon?.cost} cost</small>
      </div>
      <div className="middle_part">
        <small>HP: {pokemon.base_stats.hp}</small>
        <small>ATK: {pokemon.base_stats.attack}</small>
      </div>
      <img src={pokemon.sprite_url} alt={pokemon.name} />
    </div>
  );
}
