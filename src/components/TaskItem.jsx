
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskStatus,
  editTask,
} from "../features/tasks/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(task.id));
  }, [dispatch, task.id]);

  const handleStatus = useCallback(() => {
    dispatch(toggleTaskStatus(task.id));
  }, [dispatch, task.id]);

  const handleEdit = useCallback(() => {
    const newTitle = prompt("Enter new task title", task.title);

    if (newTitle && newTitle.trim()) {
      dispatch(
        editTask({
          id: task.id,
          title: newTitle.trim(),
          description: task.description,
        })
      );
    }
  }, [dispatch, task]);

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        Status: <strong>{task.status}</strong>
      </p>

      <div className="task-actions">
        <button onClick={handleStatus}>
          Change Status
        </button>

        <button onClick={handleEdit}>
          Edit
        </button>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default memo(TaskItem);
