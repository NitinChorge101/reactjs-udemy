import { useRef, useState } from "react";
import Modal from "./modal";

const NewTask = ({ onAdd, onDelete }) => {
    const [enteredTask, setEnteredTask] = useState("");
    const modalRef = useRef();

    const handleChange = (e) => {
        setEnteredTask(e.target.value)
    }

    const handleClick = () => {
        if (enteredTask == "") {
            modalRef.current.open();
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (<>
        <input type="text" onChange={handleChange} value={enteredTask}></input>
        <button onClick={handleClick}>+ Add Task</button>
        <Modal ref={modalRef}>
            <h2>Please fill task details first !</h2>
        </Modal>
    </>);
}

export default NewTask;