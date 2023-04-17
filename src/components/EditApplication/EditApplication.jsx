import * as applicationsAPI from '../../utilities/applications-api';
import * as contactsAPI from '../../utilities/contacts-api';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EditApplication.css';

const EditApplication = ({ application }) => {
  const navigate = useNavigate();
  const [currentApplication, setCurrentApplication] = useState({application});

  async function handleSubmit(evt) {
    evt.preventDefault();

    const updatedApplication = await applicationsAPI.updateApplication(application._id, currentApplication);

    setCurrentApplication(updatedApplication);
    navigate(0);
  }

  async function handleChange(evt) {
    setCurrentApplication({...currentApplication, [evt.target.name]: evt.target.value});
  }

  return ( 
  <div>
    <div className="main-div view-application-div">
      <div className="flex-c edit-app-wrap">
        <h4>{application.date ? new Date(application.date).toLocaleDateString() : "No Application Date Provided"}</h4>
          <h3 className="status-ip tag">{application.status}</h3>
          <h3>{application.priority ? '⭐ Priority ⭐' : ''}</h3>
          <div className="flex-r">
            <a className="tag company-tag" href={application.companyWebsite ? application.companyWebsite : "https://github.com/dmt94"}>{application.company}</a>
            <p className="tag">{application.industry ? application.industry: "Industry"}</p>
          </div>
          <h2 className="heading-emphasis">{application.role}</h2>
          <div className="flex-r">
            <h4 className="tag">{application.type}</h4>
            <p className="tag">{application.environment}</p>
            <p className="tag salary-tag">{(application.salary === "" || application.salary === null) ? "$" : application.salary}</p>
          </div>
          <div className="flex-r">
            <a className="tag url-tag" href={application.applicationUrl ? application.applicationUrl : "https://github.com/dmt94"}>Original Application Link</a>  
          </div>
          
          <h2>{application.location ? "Location" : ""}</h2>
          <p>{application.location}</p>

          <h3 className="secondary-emphasis">Role Description:</h3>
          <p>{application.description}</p>
          <div className="flex-c">
            <p className="underline">References</p>
          </div>
          <div className="flex-c">
            <p className="underline">Contacts Associated with this application</p>
          </div>
          </div>

    </div>
  </div> );
}
 
export default EditApplication;