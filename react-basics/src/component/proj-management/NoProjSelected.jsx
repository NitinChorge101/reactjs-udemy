const NoProjectSelected = ({ onStartAddProject }) => {
    return (
        <div>
            <h2>Select a project</h2>
            <button onClick={onStartAddProject}>Create New project</button>
        </div>
    );
}

export default NoProjectSelected;