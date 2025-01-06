import { useRef, useState } from "react";
import timerStyle from "./timer.module.css";
import ResultModal from "./resultModal";
const TimerChallenge = ({ title, targetTime }) => {
    // here i have used ref because i want time value independent.
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);
    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

    if (timeRemaning <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            // setTimerExpired(true);
            // setTimerStarted(false);
            // dialog.current.open(); // => for useImperativeHandle
            setTimeRemaning((prevVal) => prevVal - 10)
        }, 10)

        setTimerStarted(true);
    }

    function handleReset() {
        setTimeRemaning(targetTime * 1000);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
        // setTimerStarted(false);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remaningTime={timeRemaning} />
            <section className={timerStyle.timer}>
                <h2>{title}</h2>
                <p>{targetTime} second{targetTime > 1 ? "s" : ""}</p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Timer is running" : "timer is inactive"}
                </p>
            </section>
        </>
    );
}

export default TimerChallenge;