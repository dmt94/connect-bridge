import * as applicationsAPI from '../../utilities/applications-api';
import * as contactsAPI from '../../utilities/contacts-api';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './EditApplication.css';

const EditApplication = ({ application, setApplication }) => {

  const navigate = useNavigate();

  const [currentApplication, setCurrentApplication] = useState(application);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const contactsReceived = await contactsAPI.getAllContacts();
      setContacts(contactsReceived);
    }
    getContacts();
  }, []);

  const handleChange = (evt) => {
    evt.preventDefault();

    const { name, value } = evt.target;

    setCurrentApplication((prevApplication) => {
      if (name === "reference" || name === "contacts") {
        return { ...prevApplication, [name]: Array.from(evt.target.selectedOptions, (option) => option.value) };
      }
      return { ...prevApplication, [name]: value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const updatedApplication = await applicationsAPI.updateApplication(application._id, currentApplication);

    setCurrentApplication(updatedApplication);
    setApplication(updatedApplication);
    navigate(0);
  };

  return ( 
  <div>
    
    <div className="main-div view-application-div">
    <form action="" onSubmit={handleSubmit} className='edit-app-div-main'>
    <h2>Edit Application</h2>
      <div className="flex-ctr-ctr flex-col edit-app-wrap">
        <input className='tag' type="date" name="date" onChange={handleChange}/>
          
        <label htmlFor="status">Status:</label>
          <select className='tag' name="status" id="status" onChange={handleChange}>
            <option value="Waiting">Waiting</option>
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
              <input type="radio" name="priority" value="no" onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          </div>

            <label htmlFor="company">*Company:</label>
          <input className='company-tag input-company-tag' type="text" name="company" placeholder={application.company} onChange={handleChange} />

          <label htmlFor="companyWebsite" placeholder={application.companyWebsite}>Company Website:</label>
          <input className='tag' type="text" name="companyWebsite" onChange={handleChange} />

          <label htmlFor="industry">Industry:</label>
          <input className='tag' type="text" name="industry" onChange={handleChange} />

          
          <label htmlFor="role">*Role:</label>
          <input className="heading-emphasis tag required-tag" placeholder={application.role} type="text" name="role" onChange={handleChange} />


            <label htmlFor="type">Type:</label>
            <select className='tag' name="type" onChange={ handleChange }>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Apprenticeship">Apprenticeship</option>
              <option value="Volunteer">Volunteer</option>
            </select>
            
            <label htmlFor="environment">Environment:</label>
            <select className='tag' name="environment" onChange={handleChange}>
              <option value="In-Office">In-Office</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>

          <label htmlFor="salary">Salary Expectation:</label>
          <input className='tag salary-tag' type="text" name="salary" onChange={handleChange} placeholder={application.salary ? application.salary : '$'}/>


         <label htmlFor="applicationUrl">Application URL:</label>
          <input className='tag' type="text" name="applicationUrl" onChange={handleChange} />

          <label htmlFor="location">Location:</label>
          <input className='tag' type="text" name="location" onChange={handleChange} />

          <label htmlFor="description">*Description:</label>
          <textarea className='required-tag tag' placeholder={application.description} type="text" name="description" onChange={handleChange} />
          
          <div className="flex-c">
            <div className="select-contacts-div edit-app-div">
              <div>
              <label htmlFor="reference">Possible References:</label>
              <select name="reference" onChange={handleChange} multiple className="multiple-select">
                {contacts.map((contact, idx) => (                  
                  <option key={idx} value={contact._id}>{contact.name}</option>
                ))}
              </select>
              </div>
              <div>
              <label htmlFor="contacts">Contacts Associated with Application:</label>
              <select name="contacts" onChange={handleChange} multiple className="multiple-select">
                {contacts.map((contact, idx) => (                  
                    <option key={idx} value={contact._id}>{contact.name}</option>
                  ))}
              </select>
              </div>
            </div>
          </div>
      <button className='edit-btn' type="submit">Edit Application</button>
          </div>
          </form>
    </div>          
  </div> );
}
 
export default EditApplication;