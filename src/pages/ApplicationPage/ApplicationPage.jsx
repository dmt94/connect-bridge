import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as applicationsAPI from '../../utilities/applications-api';
import ViewApplication from "../../components/ViewApplication/ViewApplication";
import './ApplicationPage.css';

const ApplicationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const applicationId = state.applicationId;
  const [application, setApplication] = useState([]);
 
  useEffect(function() {
    async function getApplication(id) {
      const appReceived = await applicationsAPI.getApplication(id);
      setApplication(appReceived);
    }
    getApplication(applicationId);
  }, [applicationId]);

  const goBack = () => {
    navigate(-1);
  }

  async function deleteApplication(id) {
    await applicationsAPI.deleteAnApplication(id);
    navigate("/applications")
  }
  return ( 
    <div>
      <h3>Application Page!</h3>
      <ViewApplication application={application} />
      
      <Link to={`/applications/${application._id}/edit`} state={{application}}>Edit Application</Link>
      <button onClick={() => { deleteApplication(application._id) }}>Delete Contact</button>
    </div>
   );
}
 
export default ApplicationPage;