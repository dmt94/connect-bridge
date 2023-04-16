import './TaskCard.css';

const TaskCard = ({task, deleteTask, crossTask}) => {


  return ( 
    <div className="flex-c task-card">
      <button className="delete-btn" onClick={() => {deleteTask(task._id)}}>X</button>
      <div>
        <p className='tag date-tag'>{new Date(task.date).toLocaleDateString()}</p>
        <span className={`tag ${task.status === 'Complete' ? 'status-complete' : 'status-ip'}`}>{task.status}</span>
        <h2 onClick={(evt) => crossTask(evt, task._id)} className={`task-name ${task.status === 'Complete' ? 'cross-task' : ''}`}>{task.name}</h2>
        <p>{task.description}</p>
        <span className='edit-btn'>Edit</span>
      </div>
    </div>
   );
}
 
export default TaskCard;