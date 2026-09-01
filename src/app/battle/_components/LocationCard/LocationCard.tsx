import styles from "./LocationCard.module.css";

export default function LocationCard({ location, floor }: { location: string; floor: string }){
    return(
        <div className={styles.location}>

            <div className={styles.locationHeader}>
                <span className={styles.currentLocationSpan}>current location</span>
                <span className={styles.locationNameSpan}>{location}</span>
            </div>

            <span className={styles.floorNumber}>Floor {floor}</span>

            {/* TODO: Add a "floor progress" bar */}
        </div>
    );
}