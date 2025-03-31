export default function Dice({eyes, index, onDiceClicked}){
    return (
        <button onClick={() => onDiceClicked(index)}>{eyes}</button>
    )
}