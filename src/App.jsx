import AssemblyGame from "./assembly-game/AssemblyGame.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Tenzies from "./tenzies/Tenzies.jsx";
import ChefClaude from "./chef-claude/ChefClaude.jsx";
import MemeGenerator from "./meme-generator/MemeGenerator.jsx";
import TravelJournal from "./travel-journal/TravelJournal.jsx";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/assembly-game" element={<AssemblyGame/>} />
                <Route path="/tenzies" element={<Tenzies/>} />
                <Route path="/chef-claude" element={<ChefClaude/>} />
                <Route path="/meme-generator" element={<MemeGenerator/>} />
                <Route path="/travel-journal" element={<TravelJournal/>} />
            </Routes>
        </BrowserRouter>
    )
}