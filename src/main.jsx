import {createRoot} from "react-dom/client"
import App from "./App";
import './index.css'
import {HashRouter, Route, Routes} from "react-router";
import AssemblyGame from "./assembly-game/AssemblyGame.jsx";
import Tenzies from "./tenzies/Tenzies.jsx";
import ChefClaude from "./chef-claude/ChefClaude.jsx";
import MemeGenerator from "./meme-generator/MemeGenerator.jsx";
import TravelJournal from "./travel-journal/TravelJournal.jsx";

const root = createRoot(document.getElementById("root"))
root.render(<HashRouter>
    <Routes>
        <Route path="/" index element={<App/>}/>
        <Route path="/assembly-game" element={<AssemblyGame/>} />
        <Route path="/tenzies" element={<Tenzies/>} />
        <Route path="/chef-claude" element={<ChefClaude/>} />
        <Route path="/meme-generator" element={<MemeGenerator/>} />
        <Route path="/travel-journal" element={<TravelJournal/>} />
    </Routes>
</HashRouter>)