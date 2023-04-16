import { useState, useEffect } from "react";
import './TaskCard.css';
import * as tasksAPI from '../../utilities/tasks-api';
import EditTaskForm from "../EditTaskForm/EditTaskForm";

const TaskCard = ({task, deleteTask, crossTask}) => {
  const [editFormToggle, setEditFormToggle] = useState(false);
  async function handleEditTask() {

  }
  
  function editTaskToggle(evt) {
    evt.preventDefault();
    setEditFormToggle(!editFormToggle);
  }

  return ( 
    <div className="flex-c task-card">
      <button className="delete-btn" onClick={() => {deleteTask(task._id)}}>X</button>
      {editFormToggle ? (<EditTaskForm task={task} />) : 
        ( 
        <div>
          <p className='tag date-tag'>{new Date(task.date).toLocaleDateString()}</p>
          <span className={`tag ${task.status === 'Complete' ? 'status-complete' : 'status-ip'}`}>{task.status}</span>
          <h2 onClick={(evt) => crossTask(evt, task._id)} className={`task-name ${task.status === 'Complete' ? 'cross-task' : ''}`}>{task.name}</h2>
          <p>{task.description}</p>
        </div>
        )}
      <span onClick={(evt) => editTaskToggle(evt)} className='edit-btn'>{ editFormToggle ? "Cancel Edit" : "Edit"}</span>
    </div>
   );
}
 
export default TaskCard;