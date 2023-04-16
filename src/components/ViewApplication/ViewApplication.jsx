import { Link, useLocation, useNavigate } from "react-router-dom";
import './ViewApplication.css';

const ViewApplication = ({ application }) => {
  return ( 
    <div>
      <h3>{application.status}</h3>
      <h3>{application.priority}</h3>
      <h2>{application.role}</h2>
      <h4>{application.type}</h4>
      <p>{application.company}</p>
      <p>{application.companyWebsite}</p>
      <p>{application.industry}</p>
      <h4>{new Date(application.date).toLocaleDateString()}</h4>
      <p>{application.applicationUrl}</p>
      <p>{application.environment}</p>
      <h2>Location:</h2>
      <p>{application.location}</p>
      <p>{application.description}</p>
      <p>{application.salary}</p>
      <div>
        <p>References</p>
      </div>
      <div>
        <p>Contacts Associated</p>
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          <li>
            <div>
              <span>List item</span>
              <a href="">Delete</a>
            </div>
          </li>
        </ul>
        <button>Add Task</button>
      </div>
    </div>
   );
}
 
export default ViewApplication;