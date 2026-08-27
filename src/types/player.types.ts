import type { PlayerPokemon } from "./pokemon.types";

export type PartySize = 1 | 2 | 3 | 4 | 5 | 6;
export interface Item {
    id: number;
    name: string;
    description: string;
    rarity: string;

    buy_price: number;
    sell_price: number;
}

export type Inventory = Item[];

export interface PlayerInstance {
    account_id: number;
    name: string;
    gems: number;

    party: PlayerPokemon[];
    party_size: PartySize
    inventory: Inventory;

    current_floor: number;

}