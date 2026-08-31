import type { GenericPokemon } from "@/types/pokemon.types";
import type { SpeciesInput } from "./pokemonFactory";
import { pokemonFactory } from "./pokemonFactory";

export const POKEDEX = {
    //? Define pokemon like this
    //? Keys must be quoted incase of names including characters not allowed 
    //? in standard JS variable names such as hyphens, spaces and punctuation

    //? attack = (Attack + Special Attack) / 2; same goes for defence
    'bulbasaur': pokemonFactory({
        id: 1,
        name: "Bulbasaur",
        level: 1,
        sprite_url: 'fill later',
        base_stats: {
            hp: 45,
            attack: 57,
            defence: 57
        },
        moves: {
            aa_damage: 5,
            aa_cooldown: 300,
            special_move_id: "tackle",
            special_move_cooldown: 2000
        },
        primary_type: "grass",
        secondary_type: "poison",
    }),

    'charmander': pokemonFactory({
        id: 4,
        name: "Charmander",
        level: 1,
        sprite_url: 'fill later',
        base_stats: {
            hp: 39,
            attack: 56,
            defence: 46
        },
        moves: {
            aa_damage: 5,
            aa_cooldown: 300,
            special_move_id: "ember",
            special_move_cooldown: 2000
        },
        primary_type: "fire",
    })

} satisfies Record<string, GenericPokemon>;