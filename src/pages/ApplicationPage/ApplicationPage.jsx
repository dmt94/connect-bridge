import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import * as applicationsAPI from '../../utilities/applications-api';
import ViewApplication from "../../components/ViewApplication/ViewApplication";
import './ApplicationPage.css';

const ApplicationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [application, setApplication] = useState([]);
 
  useEffect(function() {
    async function getApplication() {
      const appReceived = await applicationsAPI.getApplication(id);
      setApplication(appReceived);
    }
    getApplication();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  }

  async function deleteApplication(id) {
    await applicationsAPI.deleteAnApplication(id);
    navigate("/applications")
  }
  return ( 
    <div className="application-page">
      <div className="flex-r">
        <Link className="edit-btn" to={`/applications/${application._id}/edit`} state={{application}}>Edit Application</Link>
        <button className="wide-delete-btn" onClick={() => { deleteApplication(application._id) }}>Delete Application</button>
      </div>

      <ViewApplication application={application} setApplication={setApplication} />
    </div>
   );
}
 
export default ApplicationPage;