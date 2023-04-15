import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import * as contactsAPI from '../../utilities/contacts-api';
import './ContactPage.css';
import ViewContact from "../../components/ViewContact/ViewContact";
import EditContact from "../../components/EditContact/EditContact";

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contactState = location.state;
  const contact = contactState.contact;
  const allContacts = contactState.allContacts;
  console.log("CONTACT", contact);

  const [toggleEditBtn, setToggleEditBtn] = useState(true);

  const goBack = () => {
    navigate(-1);
  }

  async function deleteContact(id) {
    await contactsAPI.deleteAContact(id);
    navigate("/contacts")
  }

  function handleToggleEditBtn(evt) {
    evt.preventDefault();
    setToggleEditBtn(!toggleEditBtn);
  }

  return ( 
    <>
      <h2>Contact Page</h2>
      <button onClick={goBack} className="btn-light">Go Back</button>
      {
        toggleEditBtn ? <ViewContact contact={contact} allContacts={allContacts} /> : <EditContact contact={contact} allContacts={allContacts} />
      }
      <button onClick={(evt) => { handleToggleEditBtn(evt) }}>{ toggleEditBtn ? 'Edit Contact' : 'Cancel Edit'}</button>
      <button onClick={() => { deleteContact(contact._id) }}>Delete Contact</button>
    </>
   );
}
 
export default ContactPage;