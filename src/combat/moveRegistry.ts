import type { MoveFunction, MoveResult } from "@/types/combat.types";
import type { GenericPokemon, PokemonType } from "@/types/pokemon.types";
import { calculateDamage } from "./calculateDamage";
import { moveFactory } from "./moveFactory";

export const MOVE_REGISTRY = {
    //? Define moves like this
    //? Keys must be quoted incase of names including characters not allowed 
    //? in standard JS variable names such as hyphens, spaces and punctuation

    'tackle': moveFactory({
        name: 'tackle',
        base_damage: 40,
        type: 'normal'
    }),

    'ember': moveFactory({
        name: 'ember',
        base_damage: 40,
        type: 'fire'
    })

} satisfies Record<string, MoveFunction>;