import './index.css'
import LanguageChips from "./components/LanguageChips.jsx";
import {useState} from "react";
import MessageBox from "./components/MessageBox.jsx";
import WordDisplay from "./components/WordDisplay.jsx";
import Keyboard from "./components/Keyboard.jsx";

export default function AssemblyGame() {
    /* TODO: Track letters and if they've been guessed.
    *   - state object -> onChange UI needs to rerender.
    *   - Can derive other values from this array such as
    *       - remaining amount of guesses. Used to display messages and which languages have died.
    *       - which letters from the guessed word to show.
    *
    *  TODO: Store which word to guess
    *   - To display this word loop through string.
    *   - compute which letters to show by comparing with the letters state.
    *
    *  TODO: Compute remaining guesses.
    *   - Calculated from letters array. Which letters have been guessed.
    *   - Used to display which language have died & messages.
    *
    * */

    const [word, setWord] = useState("react");

    return (
        <main>
            <section className="header">
                <h1>Assembly Endgame</h1>
                <p>Guess the word in under 8 guesses to keep the world safe from assembly!</p>
            </section>
            <MessageBox/>
            <LanguageChips/>
            <WordDisplay word={word} />
            <Keyboard />
            <button id="newGameBtn">New Game</button>
        </main>
    )
}