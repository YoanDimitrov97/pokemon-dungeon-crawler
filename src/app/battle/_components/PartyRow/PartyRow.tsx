import { PlayerPokemon } from "@/types/pokemon.types";
import styles from "./PartyRow.module.css"
import toPlayerPokemon from "./playerPokemonParser";
import PokemonBox from "./PokemonBox/PokemonBox";
import { POKEDEX } from "@/pokemon/pokedex";
import EmptyBox from "./EmptyBox/EmptyBox";


export default function PartyRow({party} : {party: PlayerPokemon[]}){
    let emptySlots: number = 6 - party.length;
    return(
        <div className={styles.partyContainer}>

            <div className={styles.partyContainerHeader}>
                <span className={styles.activePokemonSpan}>Active pokemon</span>
                <span className={styles.managePartySpan}>Manage Party</span>
            </div>

            <div className={styles.partyRow}>
                {Array.from({length: party.length}).map( (el, idx) => (
                    <PokemonBox 
                        key={idx}
                        pokemon={party[idx]}
                    />
                ))}
                {Array.from({length: emptySlots}).map( (el, idx) => (
                    <EmptyBox
                        key={idx}
                    />
                ))}
            </div>
        </div>
        
    );
}