import './TaskCard.css';

const TaskCard = ({task, deleteTask, crossTask}) => {


  return ( 
    <div className="flex-r task-card">
      <div>
        <p>{new Date(task.date).toLocaleDateString()}</p>
        <span>{task.status}</span>
        <h2 onClick={(evt) => crossTask(evt, task._id)} className={`task-name ${task.status === 'Complete' ? 'cross-task' : ''}`}>{task.name}</h2>
        <p>{task.description}</p>
      </div>
      <button className="delete-btn" onClick={() => {deleteTask(task._id)}}>Delete</button>
    </div>
   );
}
 
export default TaskCard;