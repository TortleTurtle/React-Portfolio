import styles from "./App.module.css";
import {Link} from "react-router";

export default function ProjectCard(props) {

    return (
        <Link to={props.uri} className={styles.cardLink}>
            <article className={styles.projectCard}>
                <img src={props.thumbnail} alt={"image showing a preview of the travel journal app."}/>
                <h2>{props.title}</h2>
                {props.description}
                <div className={styles.fakeButton}>View Project</div>
            </article>
        </Link>
    )
}