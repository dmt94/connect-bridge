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
      text: ""
    }
    );
  
  function handleChange(evt) {
    setApplication({...application, [evt.target.name]: evt.target.value });
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
          <input type="date" name="date" id="" value="" />

          <label htmlFor="role">*Position:</label>
          <input type="text" name="role" required onChange={handleChange} />
        
          <label htmlFor="applicationUrl">*Application URL:</label>
          <input type="text" name="applicationUrl" required onChange={handleChange} />

          <label htmlFor="company">*Company:</label>
          <input type="text" name="role" required onChange={handleChange} />

          <label htmlFor="description">*Description:</label>
          <textarea type="text" name="description" required onChange={handleChange} />

          <label htmlFor="salary">Salary Expectation:</label>
          <input type="text" name="salary" required onChange={handleChange} placeholder="$"/>

          <label htmlFor="status">Status:</label>
          <select name="status" id="status" required>
            <option value="Waiting" defaultChecked>Waiting</option>
            <option value="Received Offer">Received Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Interviewing">Interviewing</option>
          </select>

          <label htmlFor="priority">Is a priority application? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="priority" value="yes" />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="priority" value="no" defaultChecked />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <div className="flex-c select-contacts-div">
            <span>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options and de-select.</span>
          </div>
          <div className="select-contacts-div">
              <label htmlFor="contacts">Contacts:</label>
              <select name="contacts" required onChange={handleChange} multiple className="multiple-select">
                <option value="">Contact 1...</option>
                <option value="">Contact 2...</option>
                <option value="">Contact 3...</option>
              </select>
          </div>
          
        <button type="submit">Add Application</button>
      </form> 
    </div>
   );
}
 
export default ApplicationForm;