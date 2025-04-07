import styles from "../AssemblyGame.module.css"

export default function Keyboard(props) {
    const letterKeys = renderButtons();

    function renderButtons() {
        let buttons = [];
        for (let i = 97; i < 123; i++) {
            let char = String.fromCharCode(i);

            const hasBeenGuessed = props.guessedLetters.includes(char);
            const isCorrect = props.word.includes(char);

            let className = styles.keyboardKey;
            if (hasBeenGuessed) {
                className += isCorrect ? ` ${styles.keyboardKeySuccess}` : ` ${styles.keyboardKeyError}`;
            }

            buttons.push(
                <button
                    key={char}
                    className={className}
                    disabled={hasBeenGuessed || props.gameOver}
                    aria-disabled={hasBeenGuessed || props.gameOver}
                    aria-label={`Letter ${char}`}
                    onClick={() => !hasBeenGuessed && props.onKeyPress(char)}
                >
                    {char.toUpperCase()}
                </button>
            );
        }
        return buttons;
    }

    return (
        <section className={styles.keyboard}>
            {letterKeys}
        </section>
    );
}
