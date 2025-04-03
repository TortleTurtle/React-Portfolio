import {useEffect, useRef, useState} from "react";
import Die from "./components/Die.jsx";
import "./index.css"

export default function Tenzies() {
    const [dice, setDice] = useState(() => generateNewDice())

    const rollButton = useRef(null);

    const hasWon = checkDice();

    useEffect(() => {
        if (hasWon) {
            rollButton.current.focus();
            console.log("You have won!")
        }
    }, [hasWon]);

    function checkDice(){
        for (let i = 0; i < dice.length; i++) {
            if (i === 0) continue;
            if (dice[i].eyes !== dice[0].eyes) return false;
        }
        return true
    }

    function generateNewDice(){
        return Array(10)
            .fill(0)
            .map(() => {
                return {
                    eyes: Math.ceil(Math.random() * 6),
                    hold: false
                }
            });
    }
    function rollDice() {
        setDice(dice.map((dice) => {
            if (dice.hold) return dice;
            return {
                eyes: Math.ceil(Math.random() * 6),
                hold: false
            }
        }))
    }

    function toggleHoldDice(diceIndex) {
        setDice(dice.map((dice, index) => {
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
    function restartGame() {
        setDice(() => generateNewDice());
    }

    function renderDiceComponents() {
        return dice.map((dice, index) =>
            <Die key={index}
                 index={index}
                 eyes={dice.eyes}
                 hold={dice.hold}
                 onDiceClicked={toggleHoldDice}/>)
    }

    return (
        <main>
            <section>
                <h1>Tenzies</h1>
                <p>Roll until all dice have the same number of eyes</p>
                <div className={"diceButtons"}>{renderDiceComponents()}</div>
                <button id={"rollButton"}
                        ref={rollButton}
                        aria-label={hasWon ? "Start a new game" : "roll not held dice"}
                        onClick={() => hasWon ? restartGame(): rollDice()}>
                    {hasWon ? "Restart" : "Roll"}
                </button>
            </section>
        </main>
    )
}