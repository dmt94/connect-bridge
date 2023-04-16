import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as tasksAPI from '../../utilities/tasks-api';
import './ViewApplication.css';
import TaskCard from "../TaskCard/TaskCard";

const ViewApplication = ({ application, setApplication }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [toggleCross, setToggleCross] = useState(false);
  const [taskLimit, setTaskLimit] = useState(false);
  const [task, setTask] = useState({
    name: "",
    date: "",
    status: "In-progress",
    description: ""
  })

  function handleToggle(evt) {
    evt.preventDefault();
    setToggle(!toggle);
  }

  async function crossTask(evt, id) {
    evt.preventDefault();
    evt.target.classList.toggle("cross-task");
    const targetTask = await tasksAPI.getTask(id);
    const updatedTask = {
      ...targetTask,
      status: targetTask.status === "In-progress" ? "Complete" : "In-progress"
    };
    const updatedApplication = await tasksAPI.updateTask(id, updatedTask);
    setApplication(updatedApplication);
    navigate(0);
  }

  function handleAddTaskComponent(evt) {
    evt.preventDefault();
    if (application.task.length > 10) {
      setTaskLimit(true);
    } else {
      setTaskLimit(false);
      handleToggle(evt);
    }
  }

  async function handleDeleteTask(id) {
    const updatedApplication = await tasksAPI.deleteTask(id);
    navigate(0);
    setApplication(updatedApplication);
  }

  async function handleChange(evt) {
    setTask({...task, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (task) {
      const addTask = await tasksAPI.createTask(application._id, task);
      setApplication(addTask);
    }
    setTask({...task, [evt.target.name]: evt.target.value});
    setToggle(!toggle);
  }

  return ( 
    <div className="main-div view-application-div">
      <div className="flex-r">
        <div className="left-div">
          <h3>{application.status}</h3>
          <h3>{application.priority}</h3>
          <h2>{application.role}</h2>
          <h4>{application.type}</h4>
          <p>{application.company}</p>
          <p>{application.companyWebsite}</p>
          <p>{application.industry}</p>
          <h4>{new Date(application.date).toLocaleDateString()}</h4>
          <p>{application.applicationUrl}</p>
          <p>{application.environment}</p>
          <h2>Location:</h2>
          <p>{application.location}</p>
          <p>{application.description}</p>
          <p>{application.salary}</p>
          <div>
            <p>References</p>
          </div>
          <div>
            <p>Contacts Associated</p>
          </div>
          </div>
        </div>

        <div>
        <h2>Tasks</h2>
          <ul>
            {application.task ? (
              application.task.map((task, idx) => (
                <li key={idx}>
                  <TaskCard task={task} crossTask={crossTask} deleteTask={handleDeleteTask} setApplication={setApplication} />
                </li>
              ))
            ) : "" }
          </ul>
        {toggle ? (
          <form action="" className="flex-c" onSubmit={ handleSubmit }>
            
              <div className="flex-c">
              <p>Add New Task</p>
              <input name="name" type="text" placeholder="Task name" onChange={handleChange}/>
              <input type="datetime-local" name="date" id="" defaultValue={new Date().toLocaleDateString()} onChange={ handleChange }/>
              <textarea name="description" cols="30" rows="4" placeholder="Task Description" onChange={handleChange}></textarea>
              <span>Status</span>
              <select name="status" onChange={handleChange}>
                <option value="In-progress">In-progress</option>
                <option value="Complete">Complete</option>
              </select>
              <button>Add</button>
              </div>      
         </form>
        ) : ""
      }
        <button onClick={(evt) => handleAddTaskComponent(evt) }>{toggle ? "Cancel" : "Add New Task"}</button>
        {taskLimit ? (<p>Task limit of 10 reached. Delete a task to add more</p>): ""}
      </div>
    </div>
   );
}
 
export default ViewApplication;