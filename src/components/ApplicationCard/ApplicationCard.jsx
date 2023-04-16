import { Link } from 'react-router-dom';
import "./ApplicationCard.css";

const ApplicationCard = ({application, deleteApplication, contacts}) => {
  return ( 
    <div className="application-card">
      <div className="flex-r">
        <h2>{application.status}</h2>
        <h3>{application.priority ? "Priority" : ""}</h3>
      </div>
      <h1>{application.role}</h1>
      <h3>{application.company}</h3>
      <div className="flex-r app-card-bottom-row">
        <Link to={`/applications/${application._id}`}>View Application</Link>
        <button onClick={() => {deleteApplication(application._id)}}>Delete</button>
      </div>
    </div>
   );
}
 
export default ApplicationCard;