import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your task"
            rows="3"
          />
        </div>
        <div>
          <label> Status</label>
          <input
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            placeholder="Describe your task"
          />
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;


<div className="mb-6 rounded-xl bg-white p-5 shadow-md">
  <h2 className="mb-4 text-xl font-bold">Create New Task</h2>

  <input
    type="text"
    placeholder="Task title"
    className="mb-3 w-full rounded-md border border-gray-300 p-3 text-[15px] outline-none focus:border-[#198754] focus:ring-2 focus:ring-green-100"
  />

  <textarea
    placeholder="Task description"
    className="mb-3 min-h-20 w-full resize-y rounded-md border border-gray-300 p-3 text-[15px] outline-none focus:border-[#198754] focus:ring-2 focus:ring-green-100"
  />

  <button className="rounded-md bg-[#198754] px-5 py-3 text-white transition hover:bg-[#146c43]">
    Add Task
  </button>
</div>;
