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
<div className="mb-4 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
  <h3 className="mb-2 text-lg font-bold">Complete Project</h3>

  <p className="mb-3 text-gray-600">
    Finish the React Team Task Manager project.
  </p>

  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
    Pending
  </span>

  <div className="mt-4 flex flex-wrap gap-3">
    <button className="rounded-md bg-[#198754] px-4 py-2 text-white hover:bg-[#146c43]">
      Edit
    </button>

    <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
      Delete
    </button>
  </div>
</div>;
