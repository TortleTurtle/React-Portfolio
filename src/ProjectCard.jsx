import styles from "./App.module.css";
import {Link} from "react-router";
import {useEffect, useRef} from "react";

export default function ProjectCard(props) {

    const cardRef = useRef(null);
    const fakeButtonRef = useRef(null);

    useEffect(() => {
        const cardNode = cardRef.current;
        const fakeButtonNode = fakeButtonRef.current;

        const addHoverEffectToButton = () => {
            fakeButtonNode.classList.add(styles.fakeButtonHover);
        }
        const removeHoverEffectFromButton = () => {
            fakeButtonNode.classList.remove(styles.fakeButtonHover);
        }

        cardNode.addEventListener("mouseover", addHoverEffectToButton);
        cardNode.addEventListener("mouseout", removeHoverEffectFromButton);

        return () => {
            cardNode.removeEventListener("mouseover", addHoverEffectToButton);
            cardNode.removeEventListener("mouseout", removeHoverEffectFromButton);
        }
    }, [])

    return (
        <Link to={props.uri} className={styles.cardLink}>
            <article className={styles.projectCard}
                     ref={cardRef}>
                <img src={props.thumbnail} alt={"image showing a preview of the travel journal app."}/>
                <h2>{props.title}</h2>
                {props.description}
                <div className={styles.fakeButton}
                     ref={fakeButtonRef}>
                    View Project
                </div>
            </article>
        </Link>
    )
}