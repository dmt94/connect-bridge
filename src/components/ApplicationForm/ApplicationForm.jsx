import "./ApplicationForm.css";
import { useState } from "react";
import * as applicationsAPI from '../../utilities/applications-api';
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const navigate = useNavigate();
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
        
          <label htmlFor="role">Position:</label>
          <input type="text" name="role" required onChange={handleChange} />
        
          <label htmlFor="website">Application Website:</label>
          <input type="text" name="role" required onChange={handleChange} />

          <label htmlFor="description">Description:</label>
          <textarea type="text" name="description" required onChange={handleChange} />

          <label htmlFor="salary">Salary Expectation:</label>
          <input type="text" name="salary" required onChange={handleChange} />

          <label htmlFor="status">Status:</label>
          <input type="text" name="role" required onChange={handleChange} />
        


        <button type="submit">Add Application</button>
      </form> 
    </div>
   );
}
 
export default ApplicationForm;