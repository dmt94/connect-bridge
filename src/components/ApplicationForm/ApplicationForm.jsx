import { useState } from "react";
import * as applicationsAPI from '../../utilities/applications-api';
import { useLocation, useNavigate } from "react-router-dom";
import "./ApplicationForm.css";

const ApplicationForm = ({ applications }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const contacts = location.state;

  const [application, setApplication] = useState(
    {
      date: "",
      type: "Full-time",
      applicationURL: "",
      position: "",
      environment: "In-Office",
      location: "",
      industry: "",
      company: "",
      companyWebsite: "",
      description: "",
      salary: "",
      status: "Waiting",
      priority: false,
      reference: [],
      contacts: []
    }
    );
  
  function handleChange(evt) {
    if (evt.target.name === "reference" || evt.target.name === "contacts") {
      let value = Array.from(evt.target.selectedOptions, option => option.value);
      setApplication({...application, [evt.target.name]: value})
    } else {
      setApplication({...application, [evt.target.name]: evt.target.value });
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (application) {
      await applicationsAPI.createApplication(application);
    }
    setApplication({[evt.target.name]: evt.target.value});
    navigate('/applications');
  }
  return ( 
    <div className="application-form">
      <form action="" className="" onSubmit={ handleSubmit }>
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" onChange={handleChange}/>

          <label htmlFor="role">*Role:</label>
          <input type="text" name="role" required onChange={handleChange} />

          <label htmlFor="type">Type:</label>
          <select name="type" onChange={ handleChange }>
            <option value="Full-Time" defaultChecked>Full-Time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Apprenticeship">Apprenticeship</option>
            <option value="Volunteer">Volunteer</option>
          </select>

          <label htmlFor="environment">Environment:</label>
          <select name="environment" onChange={handleChange}>
            <option value="In-Office" defaultChecked>In-Office</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input type="text" name="location" onChange={handleChange} />
        
          <label htmlFor="applicationUrl">Application URL:</label>
          <input type="text" name="applicationUrl" onChange={handleChange} />

          <label htmlFor="industry">Industry:</label>
          <input type="text" name="industry" onChange={handleChange} />

          <label htmlFor="company">*Company:</label>
          <input type="text" name="company" required onChange={handleChange} />

          <label htmlFor="companyWebsite">Company Website:</label>
          <input type="text" name="companyWebsite" onChange={handleChange} />

          <label htmlFor="description">*Description:</label>
          <textarea type="text" name="description" required onChange={handleChange} />

          <label htmlFor="salary">Salary Expectation:</label>
          <input type="text" name="salary" onChange={handleChange} placeholder="$"/>

          <label htmlFor="status">Status:</label>
          <select name="status" id="status" onChange={handleChange}>
            <option value="Waiting" defaultChecked>Waiting</option>
            <option value="Received Offer">Received Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Interviewing">Interviewing</option>
          </select>

          <label htmlFor="priority">Is a priority application? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="priority" value="yes" onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="priority" value="no" onChange={handleChange} defaultChecked />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <div className="flex-c select-contacts-div">
            <span>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options and de-select.</span>
          </div>
          <div className="select-contacts-div">
              <label htmlFor="contacts">Contacts Associated with Application:</label>
              <select name="contacts" onChange={handleChange} multiple className="multiple-select">
                {contacts.map((contact, idx) => (                  
                    <option key={idx} value={contact._id}>{contact.name}</option>
                  ))}
              </select>
          </div>

          <div className="flex-c select-contacts-div">
            <span>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options and de-select.</span>
          </div>
          <div className="select-contacts-div">
              <label htmlFor="reference">Possible References:</label>
              <select name="reference" onChange={handleChange} multiple className="multiple-select">
                {contacts.map((contact, idx) => (                  
                  <option key={idx} value={contact._id}>{contact.name}</option>
                ))}

              </select>
          </div>
          
        <button type="submit">Add Application</button>
      </form> 
    </div>
   );
}
 
export default ApplicationForm;