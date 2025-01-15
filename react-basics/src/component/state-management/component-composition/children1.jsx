import Children2 from "./children2";

const Children1 = ({ countIncrement }) => {
    return (
        <>
            <Children2 countIncrement={countIncrement} />
        </>
    );
}

export default Children1;