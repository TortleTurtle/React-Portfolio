import {useEffect, useRef, useState} from "react";
import Die from "./components/Die.jsx";
import Confetti from "react-confetti";
import styles from "./Tenzies.module.css";

export default function Tenzies() {
    const [dice, setDice] = useState(() => generateNewDice());
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const rollButton = useRef(null);

    const hasWon = checkDice();

    useEffect(() => {
        const handleResize = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (hasWon) {
            rollButton.current.focus();
            console.log("You have won!");
        }
    }, [hasWon]);

    function checkDice() {
        for (let i = 0; i < dice.length; i++) {
            if (i === 0) continue;
            if (dice[i].eyes !== dice[0].eyes) return false;
        }
        return true;
    }

    function generateNewDice() {
        return Array(10)
            .fill(0)
            .map(() => ({
                eyes: Math.ceil(Math.random() * 6),
                hold: false
            }));
    }

    function rollDice() {
        setDice(dice.map((dice) =>
            dice.hold ? dice : {
                eyes: Math.ceil(Math.random() * 6),
                hold: false
            }
        ));
    }

    function toggleHoldDice(diceIndex) {
        setDice(dice.map((dice, index) =>
            index === diceIndex ? {
                eyes: dice.eyes,
                hold: !dice.hold
            } : dice
        ));
    }

    function restartGame() {
        setDice(() => generateNewDice());
    }

    function renderDiceComponents() {
        return dice.map((dice, index) => (
            <Die
                key={index}
                index={index}
                eyes={dice.eyes}
                hold={dice.hold}
                onDiceClicked={toggleHoldDice}
            />
        ));
    }

    return (
        <main className={styles.main}>
            {hasWon && <Confetti width={viewport.width} height={viewport.height} />}
            <section className={styles.section}>
                <h1>Tenzies</h1>
                <p>Roll until all dice have the same number of eyes</p>
                <div className={styles.diceButtons}>
                    {renderDiceComponents()}
                </div>
                <button
                    ref={rollButton}
                    className={styles.rollButton}
                    aria-label={hasWon ? "Start a new game" : "roll not held dice"}
                    onClick={() => hasWon ? restartGame() : rollDice()}
                >
                    {hasWon ? "Restart" : "Roll"}
                </button>
            </section>
        </main>
    );
}
