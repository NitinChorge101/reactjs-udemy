const Button = ({ action, children, isSelected }) => {

    return (<>
        <li className={isSelected ? "active" : ""} onClick={action}>{children}</li>
    </>)
}
export default Button;