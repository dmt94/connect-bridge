import "./NewApplication.css";
import { useState } from "react";
import * as applicationsAPI from '../../utilities/applications-api';
import { useNavigate } from "react-router-dom";

const NewApplication = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useState({text: ""});
  function handleChange(evt) {
    setApplication({text: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (application) {
      await applicationsAPI.createApplication(application);
    }
    setApplication({text: evt.target.value});
    navigate('/applications');
  }
  return ( 
    <>
      <form action="" className="flex-c" onSubmit={ handleSubmit }>
        <textarea name="new-application" cols="30" rows="10" value={ application.text }
        onChange={ handleChange }
        ></textarea>
        <button type="submit">Add Application</button>
      </form> 
    </>
   );
}
 
export default NewApplication;