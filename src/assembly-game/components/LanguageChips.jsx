import languages from "../assets/languages.js";

export default function LanguageChips() {
    const chips = languages.map((language, index) =>
        <span key={language.name}
             className={"language_chips--chip"}
             style={{ backgroundColor: language.backgroundColor, color: language.color }}>
            {language.name}
        </span>
    )

    return (
        <section className="language_chips">
            {chips}
        </section>
    )
}