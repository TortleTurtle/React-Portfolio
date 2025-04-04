export function MessageBox(props) {

    //Finally found a (completely unnecessary) use case for var.
    switch (props.type) {
        case messageTypes.SUCCESS:
            var modifier = "messageBox-success"; // this works because the var declaration gets 'hoisted'
            break;
        case messageTypes.ERROR:
            modifier = "messageBox-error";
            break;
        case messageTypes.INFO:
            modifier = "messageBox-info";
            break;
        default:
            modifier = "";
            break;
    }

    return (
        <section className={"messageBox " + modifier}>
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