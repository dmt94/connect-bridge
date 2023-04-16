const TaskCard = ({task}) => {
  return ( 
    <div>
      <p>{task.date}</p>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
    </div>
   );
}
 
export default TaskCard;