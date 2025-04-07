import globeIcon from "../assets/globe.png"
import styles from "../TravelJournal.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src={globeIcon} alt="Globe icon" aria-hidden="true"/>
                <span>My travel journal.</span>
            </nav>
        </header>
    )
}