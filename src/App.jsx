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
            description: <p>A hangman type game where te player has to guess a word related to front-end technologies.</p>,
            uri: "/assembly-game",
            thumbnail: assemblyGameThumbnail
        },
        {
            title: "Tenzies",
            description: <p>A simple game where the player has to get 10 dice with the same amount of eyes. Utilized all previous technologies</p>,
            uri: "/tenzies",
            thumbnail: tenziesThumbnail
        },
        {
            title: "Meme Generator",
            description: <p>A simple meme generator</p>,
            uri: "/meme-generator",
            thumbnail: memeGeneratorThumbnail
        },
        {
            title: "Chef Claude",
            description: <>
                <p>A simple tool to generate a recipe with ingrediënts in your house! Not functional in deployed environment to hide api-key</p>
            </>,
            uri: "/chef-claude",
            thumbnail: chefClaudeThumbnail
        },
        {
            title: "Travel Journal",
            description: <>
                <p>Simple project where I learned:</p>
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