"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import LocationCard from "./_components/LocationCard/LocationCard";
import EnemyDisplay from "./_components/EnemyDisplay/EnemyDisplay";
import { EnemyPokemon } from "@/types/pokemon.types";

export default function BattleScreen(){
    const [currentLocation, setCurrentLocation] = useState("Indigo Plateau");
    const [currentFloor, setCurrentFloor] = useState("15");
    // let mockArceus
    return(
        <div className={styles.battlePage}>
            <div className={styles.bgTexture}/>
            <div className={styles.vignetteScanline}/>

            <div className={styles.battleContainer}>
                <LocationCard location={currentLocation} floor={currentFloor}/>
            </div>

            {/* <EnemyDisplay enemy={}/> */}
        </div>
    );
}