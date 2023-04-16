import { useState } from 'react';
import './EditTaskForm.css';
import * as tasksAPI from '../../utilities/tasks-api';

const EditTaskForm = ({task, setApplication}) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(new Date(task.date).toISOString().substr(0, 16));
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
  }

  return (    
    <div className='edit-task-form'>
      <form action="" onSubmit={ handleSubmit }>
        <p className='tag date-tag'>{new Date(task.date).toLocaleDateString()}</p>
        <input className='tag date-tag' type="datetime-local" name="date" />


        <span className={`tag ${task.status === 'Complete' ? 'status-complete' : 'status-ip'}`}>{task.status}</span>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
      </form>
    </div>
   );
}
 
export default EditTaskForm;