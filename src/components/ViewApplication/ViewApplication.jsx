import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as tasksAPI from '../../utilities/tasks-api';
import './ViewApplication.css';
import TaskCard from "../TaskCard/TaskCard";

const ViewApplication = ({ application, setApplication }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [taskLimit, setTaskLimit] = useState(false);
  const [task, setTask] = useState({
    name: "",
    date: new Date(),
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
      status: targetTask.status === "In-progress" ? "Complete" : "In-progress",
      date: targetTask.date === null ? new Date().toLocaleDateString() : targetTask.date
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
        <h4>{application.date ? new Date(application.date).toLocaleDateString() : "No Application Date Provided"}</h4>
          <h3 className="status-ip tag">{application.status}</h3>
          <h3>{application.priority ? '⭐ Priority ⭐' : ''}</h3>
          <div className="flex-r">
            <a className="tag company-tag" href={application.companyWebsite ? application.companyWebsite : "https://github.com/dmt94"}>{application.company}</a>
            <p className="tag">{application.industry}</p>
          </div>
          <h2 className="heading-emphasis">{application.role}</h2>
          <div className="flex-r">
            <h4 className="tag">{application.type}</h4>
            <p className="tag">{application.environment}</p>
            <p className="tag salary-tag">{(application.salary === "" || application.salary === null) ? "$" : application.salary}</p>
          </div>
          <div className="flex-r">
            <a className="tag url-tag" href={application.applicationUrl ? application.applicationUrl : "https://github.com/dmt94"}>Original Application Link</a>  
          </div>
          
          <h2>{application.location ? "Location" : ""}</h2>
          <p>{application.location}</p>

          <h3 className="secondary-emphasis">Role Description:</h3>
          <p>{application.description}</p>
          <div className="flex-c">
            <p className="underline">References</p>
            {
            application.reference ? (
              application.reference.map((ref, idx) => (
                <Link to={`/contacts/${ref._id}`} className="tag" key={idx} state={{contactId: ref._id}}>{ref.name}</Link>
              ))
            ) : ""
          }
          </div>
          <div className="flex-c">
            <p className="underline">Contacts Associated with this application</p>
            {
            application.contacts ? (
              application.contacts.map((contact, idx) => (
                <Link to={`/contacts/${contact._id}`} className="tag" key={idx} state={{contactId: contact._id}}>{contact.name}</Link>
              ))
            ) : ""
          }
          </div>
          </div>
        </div>

        <div>
        <h2>Tasks</h2>
        <button className="add-btn" onClick={(evt) => handleAddTaskComponent(evt) }>{toggle ? "Cancel" : "Add New Task"}</button>
        {taskLimit ? (<p>Task limit of 10 reached. Delete a task to add more</p>): ""}
          <div className="grid-3">
            {application.task ? (
              application.task.map((task, idx) => (
                <div key={idx}>
                  <TaskCard task={task} crossTask={crossTask} deleteTask={handleDeleteTask} setApplication={setApplication} />
                </div>
              ))
            ) : "" }
          </div>
        {toggle ? (
          <form action="" className="flex-c" onSubmit={ handleSubmit }>
            
              <div className="flex-c">
              <p>Add New Task</p>
              <input name="name" type="text" placeholder="Task name" onChange={handleChange}/>
              <input type="datetime-local" name="date" id="" defaultValue={new Date()} onChange={handleChange}/>
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
      </div>
    </div>
   );
}
 
export default ViewApplication;