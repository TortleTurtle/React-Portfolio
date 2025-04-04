import LanguageChips from "./components/LanguageChips.jsx";
import {useState} from "react";
import {MessageBox, messageTypes} from "./components/MessageBox.jsx";
import WordDisplay from "./components/WordDisplay.jsx";
import Keyboard from "./components/Keyboard.jsx";
import languages from "./assets/languages.js";
import getFarewellMessage from "./assets/farewellMessage.js";
import './index.css'

export default function AssemblyGame() {
    /*
    *  TODO: Handle win or lose
    *    - drop confetti on win
    *
    *  TODO: New Game
    *   - get new random word
    *   - reset guessedLetters to an empty array.
    * */
    const [word, setWord] = useState("react");
    const [guessedLetters, setGuessedLetters] = useState([]);

    const wrongGuessCount = guessedLetters.filter(letter => !word.includes(letter)).length;
    const hasLost = wrongGuessCount >= 8;
    const hasWon = word.split("").every(letter => guessedLetters.includes(letter));

    const message = setMessage();

    function setMessage() {
        if (hasLost) return {
            title: "You Lost!",
            subtitle: "Better start learning assembly",
            type: messageTypes.ERROR
        }
        if (hasWon) return {
            title: "You Won!",
            subtitle: "Well Done!",
            type: messageTypes.SUCCESS,
        }
        if (wrongGuessCount > 0) return {
            title: "",
            subtitle: getFarewellMessage(languages[wrongGuessCount - 1].name),
            type: messageTypes.INFO
        }
        return {
            title: "",
            subtitle: "",
            type: messageTypes.NONE
        }
    }

    function guessLetter(letter) {
        if (hasLost || hasWon) return;
        if (guessedLetters.includes(letter)) return;

        setGuessedLetters(prevState => [...prevState, letter]);
    }

    return (
        <main>
            <section className="header">
                <h1>Assembly Endgame</h1>
                <p>Guess the word in under 8 guesses to keep the world safe from assembly!</p>
            </section>
            <MessageBox title={message.title} subtitle={message.subtitle} type={message.type}/>
            <LanguageChips languages={languages}
                           wrongGuesses={wrongGuessCount}/>
            <WordDisplay word={word}
                         guessedLetters={guessedLetters}/>
            <Keyboard word={word}
                      guessedLetters={guessedLetters}
                      onKeyPress={guessLetter}/>
            {(hasLost || hasWon) && <button id="newGameBtn">New Game</button>}
        </main>
    )
}