import {useEffect, useState} from "react";
import Dice from "./components/Dice.jsx";

export default function Tenzies() {
    const [dices, setDices] = useState(() => generateNewDices())

    useEffect(() => {

        function checkDice(){
            let prevDiceValue = undefined;
            for (let i = 0; i < dices.length; i++) {
                if (i === 0) {
                    prevDiceValue = dices[i].eyes;
                    continue;
                }

                if (prevDiceValue !== dices[i].eyes) return false;
            }
            console.log("check is true!");
            return true
        }

        if (checkDice()) {
            console.log("YOU WON!");
        }
    }, [dices])

    function generateNewDices(){
        return Array(10)
            .fill(0)
            .map(() => {
                return {
                    eyes: Math.floor(Math.random() * 6),
                    hold: false
                }
            });
    }

    function rerollDices() {
        setDices(dices.map((dice) => {
            if (dice.hold) return dice;
            return {
                eyes: Math.floor(Math.random() * 6),
                hold: false
            }
        }))
    }

    function toggleHoldDice(diceIndex) {
        setDices(dices.map((dice, index) => {
            if (index === diceIndex) {
                return {
                    eyes: dice.eyes,
                    hold: !dice.hold
                }
            } else {
                return dice;
            }
        }))
    }

    function renderDiceComponents() {
        return dices.map((dice, index) =>
            <Dice key={index}
                  index = {index}
                  eyes={dice.eyes}
                  hold={dice.hold}
                  onDiceClicked={toggleHoldDice}/>)
    }

    return (
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice have the same number of eyes</p>
            <div>{renderDiceComponents()}</div>
            <button onClick={() => rerollDices()}>Reroll dice!</button>
        </main>
    )
}