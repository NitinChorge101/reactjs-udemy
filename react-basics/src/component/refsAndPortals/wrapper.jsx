import { useRef, useState } from "react";
import TimerChallenge from "./timerChallenge";
import timerStyle from "./timer.module.css";
import ResultModal from "./resultModal";
const Wrapper = () => {
    //step-1 : create ref
    // const playerName = useRef();

    // const [enteredPlayerName, setEnteredPlayerName] = useState(null);
    // const [submitted, setSubmitted] = useState(false);

    // step-3: pass the element value with current keyword
    // current is a property on the object returned by useRef(),
    // and it holds a reference to the DOM node or React element.

    // const handleClick = () => {
    //     setEnteredPlayerName(playerName.current.value);
    // }

    return (
        <section className={timerStyle.wrapper}>
            {/* <section>
                <h1>Stop Timer Game</h1>
                <p>Welcome {enteredPlayerName ?? "Unknown person"}</p>
                <div>
                    step-2: pass ref to the element 
                    <input ref={playerName} value={enteredPlayerName} />
                    <button onClick={handleClick}>Submit</button>
                </div>
            </section> */}


            <div className={timerStyle.challengeWrapper}>
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Not Easy" targetTime={5} />
                <TimerChallenge title="Getting Tough" targetTime={10} />
                <TimerChallenge title="Pros only" targetTime={15} />
            </div>
        </section>
    );
}

export default Wrapper;