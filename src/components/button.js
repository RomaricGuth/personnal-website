export const buttonModes = {
    CONTAINED: "contained",
    OUTLINED: "outlined",
}

export default function Button(props) {
    let classes = "py-2 px-4 rounded flex flex-row justify-center items-center gap-2 min-w-max "
    switch (props.mode) {
        case buttonModes.OUTLINED:
            classes += "bg-white text-black hover:border-red-700 border"
            break;
        case buttonModes.CONTAINED:
        default:
            classes += "bg-red-700 hover:bg-red-800 text-white"
            break;
    }
    if (props.className) {
        classes += " " + props.className
    }
    return (
        <button {...props} className={classes}>
            {props.text}
            {props.renderAccessory && (
                <div className="inline-block">
                    {props.renderAccessory()}
                </div>
            )}
        </button>
    )
}