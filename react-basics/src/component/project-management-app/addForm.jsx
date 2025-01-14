import { useState } from "react";
import styled from "./managementStyle.module.css"
const AddForm = ({ data, getDetails, hideForm }) => {

    const [projectdetails, setProjectDetails] = useState({
        projectName: "",
        dueDate: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails(prevVal => ({ ...prevVal, [name]: value }))
    }
    const handleClick = () => {
        getDetails(projectdetails)
    }
    const handleHideForm = () => {
        hideForm(false)
    }

    return (
        <>
            <div className={styled.formWrapper}>
                <div className={styled.btnWrapper}>
                    <button className={styled.btn + " " + styled.dark} onClick={handleHideForm}>Cancel</button>
                    <button className={styled.btn + " " + styled.light} onClick={handleClick}>Save</button>
                </div>
                <form>
                    <div className={styled.inputWrap}>
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleChange} />
                    </div>
                    <div className={styled.inputWrap}>
                        <label>Description</label>
                        <textarea rows={6} name="description" onChange={handleChange}></textarea>
                    </div>
                    <div className={styled.inputWrap}>
                        <label>Due Date</label>
                        <input type="date" name="date" onChange={handleChange} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddForm;