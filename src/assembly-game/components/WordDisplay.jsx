export default function WordDisplay(props) {
    let letterDisplays = [];
    let screenReaderLetters = [];
    for (let i = 0; i < props.word.length; i++) {
        const char = props.word[i];
        const hasBeenGuessed = props.guessedLetters.includes(char);

        letterDisplays.push(
            <span key={i}
                  className={`word_display--letter${props.hasLost && !hasBeenGuessed ? " word_display--letter-error" : ""}`}>
                {hasBeenGuessed || props.hasLost ? char.toUpperCase() : ""}
            </span>
        )
        screenReaderLetters.push(hasBeenGuessed ? char + "." : "blank");
    }

    function isLastGuessedLetterCorrect() {
        const lastGuessedLetter = props.guessedLetters[props.guessedLetters.length - 1];
        if (!lastGuessedLetter) return "";

        const lastGuessedLetterCorrect = props.word.includes(lastGuessedLetter);
        if (lastGuessedLetterCorrect) return (
            <p>{`Correct! The letter ${lastGuessedLetter} is in the word.`}</p>
        );
        return <p>{`Incorrect, the letter ${lastGuessedLetter} is not in the word.`}</p>
    }

    return (
        <>
            <section className="word_display">
                {letterDisplays}
            </section>
            <section className="sr_only"
                     aria-live="polite"
                     role="status">
                {isLastGuessedLetterCorrect()}
                <p>Current word: {screenReaderLetters.join(" ")}</p>
                <p>Remaining guesses: {8 - props.wrongGuessCount}</p>
            </section>
        </>
    )
}