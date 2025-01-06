import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import timerStyle from "./timer.module.css";
//here we pass the forwardRef to the resultModal to receive value pass as ref in child component
// In latest version we can use directly
const ResultModal = forwardRef(function ResultModal({ targetTime, remaningTime, onReset }, ref) {

    const userLost = remaningTime <= 0;
    const formattedRemainongTime = (remaningTime / 1000).toFixed(2);
    const score = Math.round((1 - remaningTime / (targetTime * 1000)) * 100);

    //when You want to expose specific methods or properties to a parent component
    //that uses a ref then we use useImperativeHandle().
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className={timerStyle.resultModal}>
            {userLost && <p>You Lost</p>}
            {!userLost && <p> Your score: {score}</p>}
            <p>Target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainongTime} second left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});


export default ResultModal;