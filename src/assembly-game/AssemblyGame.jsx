import LanguageChips from "./components/LanguageChips.jsx";
import {useEffect, useState} from "react";
import {MessageBox, messageTypes} from "./components/MessageBox.jsx";
import WordDisplay from "./components/WordDisplay.jsx";
import Keyboard from "./components/Keyboard.jsx";
import Confetti from "react-confetti";
import {getFarewellText, getRandomWord, languages} from "./assets/utils.js";
import './index.css'

export default function AssemblyGame() {
    const [word, setWord] = useState(() => getRandomWord()); //lazy initialization.
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [message, setMessage] = useState({});
    const [viewport, setViewport] = useState({
        width: window.innerWidth, height: window.innerHeight
    });

    const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length;
    const hasLost = wrongGuessCount >= 8;
    const hasWon = word.split("").every(letter => guessedLetters.includes(letter));
    const gameOver = hasLost || hasWon;

    useEffect(() => {
        const handleResize = () => {
            setViewport({
                width: window.innerWidth, height: window.innerHeight
            });

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        function configMessage() {
            if (hasLost) return {
                title: "You Lost!", subtitle: "Better start learning assembly", type: messageTypes.ERROR
            }
            if (hasWon) return {
                title: "You Won!", subtitle: "Well Done!", type: messageTypes.SUCCESS,
            }
            if (wrongGuessCount > 0) return {
                title: "", subtitle: getFarewellText(languages[wrongGuessCount - 1].name), type: messageTypes.INFO
            }
            return {
                title: "", subtitle: "", type: messageTypes.NONE
            }
        }

        setMessage(configMessage());
    }, [hasWon, hasLost, wrongGuessCount]);

    function guessLetter(letter) {
        if (gameOver) return;
        if (guessedLetters.includes(letter)) return;

        setGuessedLetters(prevState => [...prevState, letter]);
    }

    function newGame() {
        if (!gameOver) return;
        setWord(getRandomWord());
        setGuessedLetters([]);
    }

    return (<main>
            {hasWon && <Confetti
                width={viewport.width}
                height={viewport.height}
                recycle={false}
                numberOfPieces={1000}/>}
            <section className="header">
                <h1>Assembly Endgame</h1>
                <p>Guess the word in under 8 guesses to keep the world safe from assembly!</p>
            </section>
            <MessageBox title={message.title} subtitle={message.subtitle} type={message.type}/>
            <LanguageChips languages={languages}
                           wrongGuesses={wrongGuessCount}/>
            <WordDisplay word={word}
                         guessedLetters={guessedLetters}
                         wrongGuessCount={wrongGuessCount}
                         hasLost={hasLost}/>
            <Keyboard word={word}
                      guessedLetters={guessedLetters}
                      gameOver={gameOver}
                      onKeyPress={guessLetter}/>
            {(gameOver) && <button id="newGameBtn"
                                   onClick={() => newGame()}>New Game</button>}
        </main>)
}