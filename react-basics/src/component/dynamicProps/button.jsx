import "./index.css"
export default function Button({ children, icon: Icon, ...props }) {

    console.log("icon", Icon);


    return (
        <>
            <button {...props} className={"button" + " " + (Icon ? "icon-button" : "") + " " + (props.mode == "filled" ? "filled-button" : "") + " " + (props.mode == "outline" ? "outline-button" : "") + " " + (props.mode == "text" ? "text-button" : "")}>
                {Icon && <span className="button-icon"><Icon /></span>}
                <span>{children}</span>
            </button>
        </>
    )

}
