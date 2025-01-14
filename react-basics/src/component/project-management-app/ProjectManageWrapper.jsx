
import Sidebar from "./sidebar";
import styled from "./managementStyle.module.css"
import AddForm from "./addForm";
import { useState } from "react";
import ProjectDetails from "./projectDetail";
const ProjectManagementWrapper = () => {

    const [projectData, setProjectData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState();


    const passDetails = (details) => {
        setProjectData(prevVal => ([...prevVal, details]));
    }
    const handleShowForm = (value) => {
        setShowForm(value)
    }
    const handleHideForm = (value) => {
        setShowForm(value)
        selectedProject(null)
    }
    const handleSelectedProject = (project) => {
        setSelectedProject(project);
        setShowForm(false);
    }

    return (
        <>
            <div className={styled.mainWrapper}>
                <Sidebar
                    projectNames={projectData}
                    showForm={handleShowForm}
                    selectedProject={handleSelectedProject} />
                <div className={styled.main}>
                    {
                        showForm ?
                            <AddForm
                                data={projectData}
                                getDetails={passDetails}
                                hideForm={handleHideForm}
                            /> :
                            selectedProject ? <ProjectDetails projectInfo={selectedProject} /> :
                                <h2>No project Selected</h2>
                    }

                </div>
            </div>
        </>
    );
}

export default ProjectManagementWrapper;