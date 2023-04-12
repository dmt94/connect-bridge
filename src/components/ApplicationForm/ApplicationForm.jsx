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
      <form action="" className="flex-c" onSubmit={ handleSubmit }>
        <div className="form-inputs flex-r">
          <label htmlFor="role">Position:</label>
          <input type="text" name="role" required onChange={handleChange} />
        </div>
        <div className="form-inputs flex-r">
          <label htmlFor="role">Position:</label>
          <input type="text" name="role" required onChange={handleChange} />
        </div>


        <button type="submit">Add Application</button>
      </form> 
    </div>
   );
}
 
export default ApplicationForm;