import trollFace from "../assets/troll-face.png"
import styles from "../MemeGenerator.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}