import projStyle from "./projStyle.module.css";

const ProjectSidebar = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {

    return (
        <>
            <aside className={projStyle.sidebar}>
                <h2 className={projStyle.title}>Your Projects</h2>
                <div>
                    <button onClick={onStartAddProject}>+ Add Project </button>
                </div>
                <ul>
                    {projects?.map((item, i) => {
                        return (
                            <li key={i}>
                                <button
                                    onClick={() => onSelectProject(item.id)}
                                    className={item.id === selectedProjectId ? "active" : "noActive"}
                                >{item.title}</button>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    );
}

export default ProjectSidebar;