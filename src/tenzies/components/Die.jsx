export default function Die({index, eyes, hold, onDiceClicked}){
    return (
        <button className={hold ? "hold" : ""}
                onClick={() => onDiceClicked(index)}
                aria-pressed={hold}
                aria-label={`${hold ? "Holding" : "Not Holding"} die ${index + 1} with ${eyes} eyes`}>
            {eyes}
        </button>
    )
}