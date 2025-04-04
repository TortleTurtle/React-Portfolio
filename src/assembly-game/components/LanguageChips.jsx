export default function LanguageChips(props) {
    const chips = props.languages.map((language, index) => {
        const isDead = index < props.wrongGuesses;
        const style = isDead ? "language_chips--chip language_chips--chip-dead" : "language_chips--chip";
        return (
            <span key={language.name}
                  className={style}
                  style={{backgroundColor: language.backgroundColor, color: language.color}}>
                {language.name}
            </span>
        )}
    )

    return (
        <section className="language_chips">
            {chips}
        </section>
    )
}