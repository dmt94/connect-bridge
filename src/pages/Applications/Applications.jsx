import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as applicationsAPI from '../../utilities/applications-api';
import * as contactsAPI from '../../utilities/contacts-api';
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard';
import './Applications.css';

export default function Applications() {

  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();
 
  useEffect(function() {
    async function getApplications() {
      const applicationsReceived = await applicationsAPI.getAllApplications();
      setApplications(applicationsReceived);
    }
    getApplications();
  }, []);
 
  useEffect(function() {
    async function getContacts() {
      const contactsReceived = await contactsAPI.getAllContacts();
      setContacts(contactsReceived);
    }
    getContacts();
  }, []);

  async function deleteApplication(id) {
    const updatedApplication = await applicationsAPI.deleteAnApplication(id);
    setApplications(updatedApplication);
    navigate(0);
  }

  return (
    <div className='application-div'>
      <h1>All Applications</h1>
      <Link to='/applications/new' className='' state={ contacts }>Add New Application</Link>
      <div className='contact-grid'>
        {
          applications.map((application, idx) => (
            <ApplicationCard key={idx} application={ application } deleteApplication={ deleteApplication } contacts={ contacts } />            
          ))
        }

      </div>
    </div>
  );
}