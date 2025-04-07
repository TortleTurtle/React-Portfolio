import styles from "../AssemblyGame.module.css"

export default function WordDisplay(props) {
    let letterDisplays = [];
    let screenReaderLetters = [];

    for (let i = 0; i < props.word.length; i++) {
        const char = props.word[i];
        const hasBeenGuessed = props.guessedLetters.includes(char);

        const className = `${styles.wordDisplayLetter}${props.hasLost && !hasBeenGuessed ? ` ${styles.wordDisplayLetterError}` : ""}`;

        letterDisplays.push(
            <span key={i} className={className}>
                {hasBeenGuessed || props.hasLost ? char.toUpperCase() : ""}
            </span>
        );

        screenReaderLetters.push(hasBeenGuessed ? `${char}.` : "blank");
    }

    function isLastGuessedLetterCorrect() {
        const lastGuessedLetter = props.guessedLetters[props.guessedLetters.length - 1];
        if (!lastGuessedLetter) return "";

        const lastGuessedLetterCorrect = props.word.includes(lastGuessedLetter);
        return lastGuessedLetterCorrect
            ? <p>{`Correct! The letter ${lastGuessedLetter} is in the word.`}</p>
            : <p>{`Incorrect, the letter ${lastGuessedLetter} is not in the word.`}</p>;
    }

    return (
        <>
            <section className={styles.wordDisplay}>
                {letterDisplays}
            </section>
            <section
                className={styles.srOnly}
                aria-live="polite"
                role="status"
            >
                {isLastGuessedLetterCorrect()}
                <p>Current word: {screenReaderLetters.join(" ")}</p>
                <p>Remaining guesses: {8 - props.wrongGuessCount}</p>
            </section>
        </>
    );
}
