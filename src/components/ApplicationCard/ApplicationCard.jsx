import "./ApplicationCard.css";

const ApplicationCard = ({application, deleteApplication, applications, contacts}) => {
  return ( 
    <div className="application-card">
      <div className="flex-r">
        <h2>{application.status}</h2>
        <h3>{application.priority ? "Priority" : ""}</h3>
      </div>
      <h1>{application.role}</h1>
      <h3>{application.company}</h3>
      <button onClick={() => {deleteApplication(application._id)}}>Delete</button>
    </div>
   );
}
 
export default ApplicationCard;