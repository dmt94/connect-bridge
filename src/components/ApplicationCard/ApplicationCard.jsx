import { Link } from 'react-router-dom';
import "./ApplicationCard.css";

const ApplicationCard = ({application, deleteApplication, contacts}) => {
  return ( 
    <div className="application-card">
        <h3>{application.priority ? "⭐ Priority " : ""}</h3>
      <div className="flex-r app-card-top-row">
        <h2 className=''>{application.status}</h2>
        <button className='wide-delete-btn' onClick={() => {deleteApplication(application._id)}}>Delete</button>
      </div>
      <h1>{application.role}</h1>

      <div className="flex-r app-card-bottom-row">
        <Link className='' to={`/applications/${application._id}`}>View Application</Link>
        <a href={application.companyWebsite ? application.companyWebsite : ""} className=''>{application.company}</a>
      </div>
    </div>
   );
}
 
export default ApplicationCard;