const Card = ({ children, title }) => {
    return (
        <>
            <h1>{title}</h1>
            <div>{children}</div>
        </>
    )
}
export default Card;