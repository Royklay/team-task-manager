import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.length - completed;

  return (
    <div className="dashboard">
      <Navbar />

      <main className="container">
        <h1>My Tasks</h1>
        <p>Manage your daily activities easily.</p>

        <div className="stats">
          <div className="stat-card">
            <h2>{tasks.length}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h2>{pending}</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card">
            <h2>{completed}</h2>
            <p>Completed</p>
          </div>
        </div>

        <TaskForm />

        <TaskList />
      </main>
    </div>
  );
}

export default Dashboard;