import { useRef, useState } from "react";
import Input from "./input";
import Modal from "./modal";

const NewProj = ({ onAdd, closeForm }) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const showModalRef = useRef();

    const handleSave = () => {
        let titleVal = title.current.value;
        let descriptionVal = description.current.value;
        let dueDateVal = dueDate.current.value;

        if (titleVal.trim() === "" || descriptionVal.trim() === "" || dueDateVal.trim() === "") {
            showModalRef.current.open();
            return;
        }
        onAdd({
            title: titleVal,
            description: descriptionVal,
            dueDate: dueDateVal
        });
    }
    return (
        <>
            <div>
                <menu>
                    <button onClick={closeForm}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </menu>
                <Input ref={title} label="Name" type="text" />
                <Input ref={description} isTextarea={true} rows={6} label="Description" />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>
            <Modal ref={showModalRef}>
                <p>Please fill the data in all fields</p>
            </Modal>
        </>
    );
}

export default NewProj;