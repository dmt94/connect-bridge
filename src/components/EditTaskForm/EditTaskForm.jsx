import './EditTaskForm.css';

const EditTaskForm = ({task}) => {
  return (    
    <div>
      <p className='tag date-tag'>{new Date(task.date).toLocaleDateString()}</p>
      <span className={`tag ${task.status === 'Complete' ? 'status-complete' : 'status-ip'}`}>{task.status}</span>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
    </div>
   );
}
 
export default EditTaskForm;