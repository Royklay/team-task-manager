
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { deleteTask } from "../features/tasks/taskSlice";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Delete a task
  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
