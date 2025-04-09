import styles from "./App.module.css";
import ProjectCard from "./ProjectCard.jsx";
import assemblyGameThumbnail from "./assets/ThumbnailAssemblyGame.png";
import tenziesThumbnail from "./assets/ThumbnailTenzies.png";
import memeGeneratorThumbnail from "./assets/ThumbnailMemeGenerator.png";
import chefClaudeThumbnail from "./assets/ThumbnailChefClaude.png";
import travelJournalThumbnail from "./assets/ThumbnailTravelJournal.png";

export default function App() {

    const projects = [
        {
            title: "Assembly Game",
            description: <>
                <p>A hangman type game where te player has to guess a word related to front-end technologies. A more complex project then Tenzies. Challenges were:</p>
                <ul>
                    <li>State management & derived state</li>
                    <li>When to use side effects.</li>
                    <li>complex dynamic rendering such as rendering specific letters</li>
                </ul>
            </>,
            uri: "/assembly-game",
            thumbnail: assemblyGameThumbnail
        },
        {
            title: "Tenzies",
            description: <>
                <p>A simple game where the player has to get 10 dice with the same amount of eyes. Putting into practice all concepts learned until now. Challenges were:</p>
                <ul>
                    <li>What should be state and what can be derived from state?</li>
                    <li>When to use side effects.</li>
                </ul>
            </>,
            uri: "/tenzies",
            thumbnail: tenziesThumbnail
        },
        {
            title: "Meme Generator",
            description: <>
                <p>A simple meme generator. This project focussed on:</p>
                <ul>
                    <li>Controlled components</li>
                    <li>Functional programming & React</li>
                    <li>Side Effects</li>
                </ul>
            </>,
            uri: "/meme-generator",
            thumbnail: memeGeneratorThumbnail
        },
        {
            title: "Chef Claude",
            description: <>
                <p>An interactive app to generate a recipe with ingrediënts you have available! This project focussed on:</p>
                <ul>
                    <li>Event listeners</li>
                    <li>State & state management</li>
                    <li>Conditional rendering</li>
                    <li>Forms</li>
                </ul>
                <p>Note: Since this is a purely front-end app I am unable to hide my apikey. Fetching from the mistral AI will not work. A fallback has been implemented do demonstrate interactivity.</p>
            </>,
            uri: "/chef-claude",
            thumbnail: chefClaudeThumbnail
        },
        {
            title: "Travel Journal",
            description: <>
                <p>Very basic project to understand:</p>
                <ul>
                    <li>Reusability</li>
                    <li>Props</li>
                    <li>Creating components from arrays</li>
                    <li>CSS / styling practice</li>
                </ul>
            </>,
            uri: "/travel-journal",
            thumbnail: travelJournalThumbnail
        },
    ];

    const projectCards = projects.map((project) => <ProjectCard key={project.uri} {...project} />);

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1>React Portfolio</h1>
            </header>
            <nav className={styles.nav}>
                {projectCards}
            </nav>
        </main>
    )
}