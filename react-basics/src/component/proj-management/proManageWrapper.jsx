import { useState } from "react";
import NewProj from "./newProj";
import ProjectSidebar from "./projectSidebar";
import projStyle from "./projStyle.module.css";
import NoProjectSelected from "./NoProjSelected";
import SelectedProject from "./selectedProject";
const ProjManageWrapper = () => {
    const [projectsState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        task: []
    });

    const handleAddTask = (text) => {
        console.log("text", text);

        setProjectState((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                task: [newTask, ...prevState.task],
            }
        });
    }
    const handleDeleteTask = (taskId) => {
        setProjectState((prevState) => {
            return {
                ...prevState,
                task: prevState.task.filter((task) => task.id !== taskId)
            }
        })
    }

    const handleStartAddProject = () => {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        })
    }

    const handleAddProject = (projectData) => {
        const newProject = {
            ...projectData,
            id: Math.random()
        };
        setProjectState((prevState) => {
            return { ...prevState, selectedProjectId: undefined, projects: [...prevState.projects, newProject] }
        });
    }

    const handleCloseForm = () => {
        setProjectState((prevState) => {
            return { ...prevState, selectedProjectId: undefined }
        })
    }

    const handleSelectProject = (id) => {

        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            }
        })
    }

    const handleDelete = () => {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
            }
        })
    }


    const selectedProject = projectsState?.projects.find(project => project.id == projectsState.selectedProjectId);

    let content =
        <SelectedProject
            project={selectedProject}
            onDelete={handleDelete}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.task} />;

    if (projectsState?.selectedProjectId === null) {
        content = <NewProj onAdd={handleAddProject} closeForm={handleCloseForm} />
    } else if (projectsState?.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
    }

    return (
        <>
            <div className={projStyle.mainWrapper}>
                <ProjectSidebar
                    onSelectProject={handleSelectProject}
                    onStartAddProject={handleStartAddProject}
                    projects={projectsState?.projects}
                    selectedProjectId={selectedProject?.id} />
                {content}
            </div>
        </>
    );
}

export default ProjManageWrapper;