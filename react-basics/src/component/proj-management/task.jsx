import NewTask from "./newTask";

const Task = ({ tasks, onAdd, onDelete }) => {
    const handleClick = (id) => {
        onDelete(id)
    }
    return (
        <section>
            <h2>Task</h2>
            <NewTask onAdd={onAdd} onDelete={onDelete} />
            {tasks?.length == 0 &&
                <p>This project does not have any task yet</p>
            }
            {tasks?.length > 0 &&
                <u>
                    {
                        tasks.map((item, i) => (
                            <li key={i}>
                                {console.log("item", item)}
                                <span>{item.text}</span>
                                <button onClick={() => handleClick(item.id)}>Clear</button>
                            </li>
                        ))
                    }
                </u>
            }
        </section>
    );
}

export default Task;