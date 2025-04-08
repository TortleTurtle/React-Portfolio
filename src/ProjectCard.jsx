import styles from "./App.module.css";
import travelJournalThumbnail from "./assets/thumbnail.png";
import {Link} from "react-router";

export default function ProjectCard(props) {

    return (
        <Link to="/travel-journal" className={styles.cardLink}>
            <article className={styles.projectCard}>
                <img src={travelJournalThumbnail} alt={"image showing a preview of the travel journal app."}/>
                <h2>Travel Journal</h2>
                <p>Simple project where I learned:</p>
                <ul>
                    <li>Reusability</li>
                    <li>Props</li>
                    <li>Creating components from arrays</li>
                    <li>CSS / styling practice</li>
                </ul>
                <button>View Project</button>
            </article>
        </Link>
    )
}