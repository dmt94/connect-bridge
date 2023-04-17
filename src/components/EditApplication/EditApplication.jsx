import * as applicationsAPI from '../../utilities/applications-api';
import * as contactsAPI from '../../utilities/contacts-api';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EditApplication.css';

const EditApplication = ({ application }) => {
  const navigate = useNavigate();
  const [currentApplication, setCurrentApplication] = useState({application});


  function handleChange(evt) {
    if (evt.target.name === "reference" || evt.target.name === "contacts") {
      let value = Array.from(evt.target.selectedOptions, option => option.value);
      setCurrentApplication({...currentApplication, [evt.target.name]: value})
    } else {
      setCurrentApplication({...currentApplication, [evt.target.name]: evt.target.value });
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const updatedApplication = await applicationsAPI.updateApplication(application._id, currentApplication);

    setCurrentApplication(updatedApplication);
    navigate(0);
  }

  return ( 
  <div>
    <div className="main-div view-application-div">
      <div className="flex-c edit-app-wrap">
        <input className='tag' type="date" name="date" onChange={handleChange}/>
          
        <label htmlFor="status">Status:</label>
          <select className='tag' name="status" id="status" onChange={handleChange}>
            <option value="Waiting" defaultChecked>Waiting</option>
            <option value="Received Offer">Received Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Interviewing">Interviewing</option>
          </select>

          <label htmlFor="priority">Is a priority application? </label>
          <div className="flex-r edit-priority-div">
            <div className="radio-div">
              <input type="radio" name="priority" value="yes" onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="priority" value="no" onChange={handleChange} defaultChecked />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <div className="flex-r">
            <label htmlFor="company">*Company:</label>
          <input className='company-tag input-company-tag' type="text" name="company" placeholder={application.company} required onChange={handleChange} />

          <label htmlFor="companyWebsite" placeholder={application.companyWebsite}>Company Website:</label>
          <input className='tag' type="text" name="companyWebsite" onChange={handleChange} />

          <label htmlFor="industry">Industry:</label>
          <input className='tag' type="text" name="industry" onChange={handleChange} />
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