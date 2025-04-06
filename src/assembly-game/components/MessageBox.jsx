export function MessageBox(props) {

    //Finally found a (completely unnecessary) use case for var.
    switch (props.type) {
        case messageTypes.SUCCESS:
            var modifier = "message_box-success"; // this works because the var declaration gets 'hoisted'
            break;
        case messageTypes.ERROR:
            modifier = "message_box-error";
            break;
        case messageTypes.INFO:
            modifier = "message_box-info";
            break;
        default:
            modifier = "";
            break;
    }

    return (
        <section className={"message_box " + modifier}
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