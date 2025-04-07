import styles from "../AssemblyGame.module.css"

export default function LanguageChips(props) {
    const chips = props.languages.map((language, index) => {
        const isDead = index < props.wrongGuesses;
        const chipClass = isDead
            ? `${styles.languageChipsChip} ${styles.languageChipsChipDead}`
            : styles.languageChipsChip;

        return (
            <span
                key={language.name}
                className={chipClass}
                style={{ backgroundColor: language.backgroundColor, color: language.color }}
            >
                {language.name}
            </span>
        );
    });

    return (
        <section className={styles.languageChips}>
            {chips}
        </section>
    );
}
