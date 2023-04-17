import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import * as applicationsAPI from '../../utilities/applications-api';
import ViewApplication from "../../components/ViewApplication/ViewApplication";
import EditApplication from "../../components/EditApplication/EditApplication";
import './ApplicationPage.css';

const ApplicationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [application, setApplication] = useState([]);
  const [toggleEditApplication, setToggleEditApplication] = useState(false);
 
  useEffect(function() {
    async function getApplication() {
      const appReceived = await applicationsAPI.getApplication(id);
      setApplication(appReceived);
    }
    getApplication();
  }, [id]);

  async function handleEditAppToggle(evt) {
    evt.preventDefault();
    setToggleEditApplication(!toggleEditApplication);
  }

  async function deleteApplication(id) {
    await applicationsAPI.deleteAnApplication(id);
    navigate("/applications")
  }
  return ( 
    <div className="application-page">
      <div className="flex-r">
        <button className="edit-btn" onClick={(evt) => handleEditAppToggle(evt)}>{toggleEditApplication ? "Cancel Edit" : "Edit Application"}</button>
        <button className="wide-delete-btn" onClick={() => { deleteApplication(application._id) }}>Delete Application</button>
      </div>

      {toggleEditApplication ? (<EditApplication application={application} setApplication={setApplication} />) : (<ViewApplication application={application} setApplication={setApplication} />)}

      
    </div>
   );
}
 
export default ApplicationPage;