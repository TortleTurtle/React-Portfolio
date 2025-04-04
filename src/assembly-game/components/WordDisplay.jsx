export default function WordDisplay(props) {
    let letters = []
    for (let i = 0; i < props.word.length; i++) {
        const char = props.word[i];
        const showLetter = props.guessedLetters.includes(char);
        letters.push(
            <span key={i} className="word_display--letter">{showLetter ? char.toUpperCase() : ""}</span>
        )
    }

    return (
        <section className="word_display">
            {letters}
        </section>
    )
}