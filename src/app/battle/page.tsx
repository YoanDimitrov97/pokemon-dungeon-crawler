"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import LocationCard from "./_components/LocationCard/LocationCard";
import EnemyDisplay from "./_components/EnemyDisplay/EnemyDisplay";
import { EnemyPokemon } from "@/types/pokemon.types";
import { POKEDEX } from "@/pokemon/pokedex";
import toEnemy from "./_components/EnemyDisplay/enemyParser";
import PartyRow from "./_components/PartyRow/PartyRow";
import toPlayerPokemon from "./_components/PartyRow/playerPokemonParser";

export default function BattleScreen() {
    const [currentLocation, setCurrentLocation] = useState("Indigo Plateau");
    const [currentFloor, setCurrentFloor] = useState("15");
    const party = [
        toPlayerPokemon(POKEDEX.charmander),
        toPlayerPokemon(POKEDEX.bulbasaur),
        toPlayerPokemon(POKEDEX.charmander)
    ]
    // let mockArceus
    return (
        <div className={styles.battlePage}>
            <div className={styles.wipWarning}>page is unfinished; no battle logic</div>
            <div className={styles.bgTexture} />
            <div className={styles.vignetteScanline} />

            <div className={styles.battleContainer}>
                <LocationCard location={currentLocation} floor={currentFloor} />
                <EnemyDisplay enemy={toEnemy(POKEDEX.bulbasaur)} />
                <PartyRow party={party} />
            </div>

        </div>
    );
}