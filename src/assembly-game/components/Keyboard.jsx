export default function Keyboard(props) {
    const letterKeys = renderButtons();

    function renderButtons() {
        let buttons = [];
        for (let i = 97; i < 123; i++) {
            let char = String.fromCharCode(i);
            buttons.push(
                <button key={char} className="keyboard--key">{char.toUpperCase()}</button>
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