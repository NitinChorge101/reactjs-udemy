import { useState } from "react";
import Children1 from "./children1";
import Children2 from "./children2";
import Children3 from "./children3";

const CompositionWrapper = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount((prevState) => prevState + 1);
    }
    return (
        <>
            <p>count is {count}</p>
            <Children1 />
            {/* in below we pass function in direct children2  */}
            <Children2>
                {
                    <div>
                        <button onClick={handleCount}>Add +</button>
                        <Children3 />
                    </div>
                }
            </Children2>
        </>
    );
}

export default CompositionWrapper;