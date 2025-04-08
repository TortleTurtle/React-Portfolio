import styles from "./App.module.css";
import ProjectCard from "./ProjectCard.jsx";
export default function App() {
    /*
    * TODO: Store projects in array.
    *  - description as JSX
    */
    return (
        <>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1>React Portfolio</h1>
                </header>
                <nav className={styles.nav}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </nav>
            </main>
        </>
    )
}