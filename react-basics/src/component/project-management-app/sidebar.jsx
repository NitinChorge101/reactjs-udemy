
import style from "./managementStyle.module.css"
const Sidebar = ({ projectNames, showForm, selectedProject }) => {
    const handleShow = () => {
        showForm(true)
    }
    const handleSelectedItem = (item) => {
        selectedProject(item)
    }
    return (
        <aside className={style.sidebarWrapper}>
            <h2 className={style.title}>Your Projects</h2>
            <button className={style.btn} onClick={handleShow}>+ Add Project</button>
            <ul className={style.projectNames}>
                {projectNames?.map((item, i) => (
                    <li key={i} onClick={() => handleSelectedItem(item)}>{item.title}</li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;