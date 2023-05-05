export const buttonModes = {
    CONTAINED: "contained",
    OUTLINED: "outlined",
}

export default function Button(props) {
    let classes = "py-2 px-4 border rounded "
    switch (props.mode) {
        case buttonModes.OUTLINED:
            classes += "bg-white hover:bg-red-700 hover:text-white border-red-700"
            break;
        case buttonModes.CONTAINED:
        default:
            classes += "bg-red-700 hover:bg-white text-white hover:text-black border-red-700"
            break;
    }
    if (props.class) {
        classes += " " + props.class
    }
    return (
        <button {...props} class={classes}>{props.text}</button>
    )
}