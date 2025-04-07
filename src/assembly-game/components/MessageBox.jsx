import styles from "../AssemblyGame.module.css"

export function MessageBox(props) {
    let modifier;

    switch (props.type) {
        case messageTypes.SUCCESS:
            modifier = styles.messageBoxSuccess;
            break;
        case messageTypes.ERROR:
            modifier = styles.messageBoxError;
            break;
        case messageTypes.INFO:
            modifier = styles.messageBoxInfo;
            break;
        default:
            modifier = "";
            break;
    }

    return (
        <section
            className={`${styles.messageBox} ${modifier}`}
            aria-live="polite"
            role="status"
        >
            {props.title && <h2>{props.title}</h2>}
            {props.subtitle && <p>{props.subtitle}</p>}
        </section>
    )
}

export const messageTypes = Object.freeze({
    NONE: 0,
    SUCCESS: 1,
    ERROR: 2,
    INFO: 3,
})
