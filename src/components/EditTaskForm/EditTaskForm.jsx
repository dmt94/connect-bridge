import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './EditTaskForm.css';
import * as tasksAPI from '../../utilities/tasks-api';

const EditTaskForm = ({task, setApplication}) => {
  const navigate = useNavigate();
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState(task.status);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedTask = {
      id: task._id,
      name,
      description,
      date, 
      status
    }
    const updatedApplication = await tasksAPI.updateTask(task._id, updatedTask);
    setApplication(updatedApplication);
    navigate(0);
  }

  return (    
    <div className='edit-task-form'>
      <form action="" onSubmit={ handleSubmit }>
        <input className='tag date-tag' type="datetime-local" name="date" onChange={(evt) => setDate(evt.target.value)} />

        <span>Status:</span>
        <select className="tag" name="status" onChange={(evt) => setStatus(evt.target.value)}>
          <option value="In-progress" >In-progress</option>
          <option value="Complete" >Complete</option>
        </select>

        <span>Task Name:</span>
        <input className='text-input' name="name" type="text" placeholder={task.name} onChange={(evt) => setName(evt.target.value)} />
        
        <span>Task Description:</span>
        <textarea className='textarea-input' name="description" placeholder={task.description} cols="30" rows="3" onChange={(evt) => setDescription(evt.target.value)}></textarea>
        <button className='complete-btn'>Complete Edit</button>
      </form>
    </div>
   );
}
 
export default EditTaskForm;