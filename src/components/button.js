export const buttonModes = {
    CONTAINED: "contained",
    OUTLINED: "outlined",
}

export default function Button(props) {
    let classes = "py-2 px-4 rounded "
    switch (props.mode) {
        case buttonModes.OUTLINED:
            classes += "bg-white hover:border-red-700 border"
            break;
        case buttonModes.CONTAINED:
        default:
            classes += "bg-red-700 hover:bg-red-800 text-white"
            break;
    }
    if (props.class) {
        classes += " " + props.class
    }
    return (
        <button {...props} class={classes}>
            {props.text}
            {props.renderAccessory && (
                <div class="ml-2 inline-block">
                    {props.renderAccessory()}
                </div>
            )}
        </button>
    )
}