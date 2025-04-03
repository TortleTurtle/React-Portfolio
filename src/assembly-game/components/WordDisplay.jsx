export default function WordDisplay(props) {
    let letters = []
    for (let i = 0; i < props.word.length; i++) {
        letters.push(
            <span key={i} className="word_display--letter">{props.word[i].toUpperCase()}</span>
        )
    }

    return (
        <section className="word_display">
            {letters}
        </section>
    )
}