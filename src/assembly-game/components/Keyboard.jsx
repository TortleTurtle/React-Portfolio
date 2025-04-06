export default function Keyboard(props) {
    const letterKeys = renderButtons();

    function renderButtons() {
        let buttons = [];
        for (let i = 97; i < 123; i++) {
            let char = String.fromCharCode(i);

            const hasBeenGuessed = props.guessedLetters.includes(char);
            const isCorrect = props.word.includes(char);

            const modifier = hasBeenGuessed ? (isCorrect ? " keyboard--key-success" : " keyboard--key-error") : "";
            let style = "keyboard--key" + modifier;

            buttons.push(
                <button key={char}
                        className={style}
                        disabled={hasBeenGuessed || props.gameOver}
                        aria-disabled={hasBeenGuessed || props.gameOver}
                        aria-label={`Letter ${char}`}
                        onClick={() => !hasBeenGuessed && props.onKeyPress(char)}>
                    {char.toUpperCase()}
                </button>
            )
        }
        return buttons;
    }

    return (
        <section className="keyboard">
            {letterKeys}
        </section>
    )
}