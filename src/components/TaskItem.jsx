
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskItems({ task }) {

    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteTask(task.id));
    }

    return (
        <div>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>{task.status}</p>

            <button onClick={handleDelete}>
                Delete Task
            </button>
        </div>
    );
}

export default React.memo(TaskItems);
