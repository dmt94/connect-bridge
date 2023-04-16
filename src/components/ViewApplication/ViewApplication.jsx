import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './ViewApplication.css';

const ViewApplication = ({ application }) => {
  const [toggle, setToggle] = useState(false);
  const [taskLimit, setTaskLimit] = useState(false);
  const [checkTask, setCheckTask] = useState(false);

  function handleToggle(evt) {
    evt.preventDefault();
    setToggle(!toggle);
  }

  function crossTask(evt) {
    evt.preventDefault();
    evt.target.classList.toggle("cross-task");
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

  return ( 
    <div className="main-div">
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
      <div>
        <h2>Tasks</h2>
        <ul>
          <li>
            <div className="flex-r task-list">
              <span onClick={(evt) => {crossTask(evt)}}>List item</span>
              <a href="">Delete</a>
            </div>
          </li>
        </ul>
        {toggle ? (
          <form action="" className="flex-c">
            
              <div className="flex-c">
              <p>Add New Task</p>
              <input name="name" type="text" placeholder="Task name" />
              <input type="datetime-local" name="date" id="" />
              <textarea name="description" cols="30" rows="4" placeholder="Task Description"></textarea>
              <span>Status</span>
              <select name="status">
                <option value="In-progress">In-progress</option>
                <option value="In-progress">Complete</option>
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