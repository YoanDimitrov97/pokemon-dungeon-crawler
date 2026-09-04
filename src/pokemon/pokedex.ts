import type { GenericPokemon } from "@/types/pokemon.types";
import type { SpeciesInput } from "./pokemonFactory";
import { pokemonFactory } from "./pokemonFactory";

export const POKEDEX = {
  //? Define pokemon like this
  //? Keys must be quoted incase of names including characters not allowed
  //? in standard JS variable names such as hyphens, spaces and punctuation

  //? attack = (Attack + Special Attack) / 2; same goes for defence
  bulbasaur: pokemonFactory({
    id: 1,
    name: "Bulbasaur",
    level: 1,
    cost: 3,
    sprite_url:
      "https://play.pokemonshowdown.com/sprites/gen5ani/bulbasaur.gif",
    base_stats: {
      hp: 45,
      attack: 57,
      defence: 57,
    },
    moves: {
      aa_damage: 5,
      aa_cooldown: 300,
      special_move_id: "tackle",
      special_move_cooldown: 2000,
    },
    primary_type: "grass",
    secondary_type: "poison",
  }),

  charmander: pokemonFactory({
    id: 4,
    name: "Charmander",
    level: 1,
    cost: 3,
    sprite_url:
      "https://play.pokemonshowdown.com/sprites/gen5ani/charmander.gif",
    base_stats: {
      hp: 39,
      attack: 56,
      defence: 46,
    },
    moves: {
      aa_damage: 5,
      aa_cooldown: 300,
      special_move_id: "ember",
      special_move_cooldown: 2000,
    },
    primary_type: "fire",
  }),
  squirtle: pokemonFactory({
    id: 7,
    name: "Squirtle",
    level: 1,
    cost: 3,
    sprite_url: "https://play.pokemonshowdown.com/sprites/gen5ani/squirtle.gif",
    base_stats: {
      hp: 39,
      attack: 56,
      defence: 46,
    },
    moves: {
      aa_damage: 5,
      aa_cooldown: 300,
      special_move_id: "shell bash",
      special_move_cooldown: 2000,
    },
    primary_type: "water",
  }),
  caterpie: pokemonFactory({
    id: 10,
    name: "Caterpie",
    level: 1,
    cost: 1,
    sprite_url: "https://play.pokemonshowdown.com/sprites/gen5ani/caterpie.gif",
    base_stats: {
      hp: 39,
      attack: 56,
      defence: 46,
    },
    moves: {
      aa_damage: 5,
      aa_cooldown: 300,
      special_move_id: "string shot",
      special_move_cooldown: 2000,
    },
    primary_type: "bug",
  }),
  weedle: pokemonFactory({
    id: 13,
    name: "Weedle",
    level: 1,
    cost: 1,
    sprite_url: "https://play.pokemonshowdown.com/sprites/gen5ani/weedle.gif",
    base_stats: {
      hp: 39,
      attack: 56,
      defence: 46,
    },
    moves: {
      aa_damage: 5,
      aa_cooldown: 300,
      special_move_id: "poison sting",
      special_move_cooldown: 2000,
    },
    primary_type: "bug",
    secondary_type: "poison",
  }),
  pidgey: pokemonFactory({
    id: 16,
    name: "Pidgey",
    level: 1,
    cost: 2,
    sprite_url: "https://play.pokemonshowdown.com/sprites/gen5ani/pidgey.gif",
    base_stats: {
      hp: 39,
      attack: 56,
      defence: 46,
    },
    moves: {
      aa_damage: 5,
      aa_cooldown: 300,
      special_move_id: "peck",
      special_move_cooldown: 2000,
    },
    primary_type: "normal",
    secondary_type: "flying",
  }),
} satisfies Record<string, GenericPokemon>;
