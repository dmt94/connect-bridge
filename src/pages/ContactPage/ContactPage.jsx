import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as contactsAPI from '../../utilities/contacts-api';
import './ContactPage.css';
import ViewContact from "../../components/ViewContact/ViewContact";

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const contactId = state.contactId;
  const [allContacts, setAllContacts] = useState([]);
  const [contact, setContact] = useState([]);
 
  useEffect(function() {
    async function getContacts() {
      const contactsReceived = await contactsAPI.getAllContacts();
      setAllContacts(contactsReceived);
    }
    getContacts();
  }, []);

  useEffect(function() {
    async function getAContact(id) {
      const contactsReceived = await contactsAPI.getContact(id);
      setContact(contactsReceived);
    }
    getAContact(contactId);
  }, [contactId]);

  const goBack = () => {
    navigate(-1);
  }

  async function deleteContact(id) {
    await contactsAPI.deleteAContact(id);
    navigate("/contacts")
  }

  return ( 
    <>
      <h2>Contact Page</h2>
      <button onClick={goBack} className="btn-light">Go Back</button>
      <ViewContact contact={contact} allContacts={allContacts} />
      
      <div className="flex-r bottom-card-row">
        <Link className="edit-btn" to={`/contacts/${contact._id}/edit`} state={{contact, allContacts}}>Edit Contact</Link>
        <button className="wide-delete-btn" onClick={() => { deleteContact(contact._id) }}>Delete Contact</button>
      </div>
    </>
   );
}
 
export default ContactPage;