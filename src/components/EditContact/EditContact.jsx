import * as contactsAPI from '../../utilities/contacts-api';
import { useLocation, useNavigate, Link } from "react-router-dom";
import './EditContact.css';
import '../ViewContact/ViewContact.css';

const EditContact = ({ contact }) => {

  async function updateContact(id) {
    const updatedContactDetails = await contactsAPI.updateAContact(id);
    // setCurrentContact(updatedContactDetails);
  }

  async function handleUpdate(id) {
    updateContact(id);
  }

  return ( 
    <div className="main-contact-div">
      <div className="flex-r">
        <button className="edit-btn">Complete Edit</button>
      </div>
      <div className="contact-wrapper">
      <div className="flex-r about-contact-div">
        <div>
          <p>{contact.relationship}</p>
          <img src={contact.image} alt="" className="contact-profile-img" />
        </div>
        <div>
          {
            contact.url ? <p href={`${contact.url}`} target="_blank" rel="noreferrer">Website</p> : ""
          }
          {
            contact.linkedin ? <p href={`${contact.linkedin}`} target="_blank" rel="noreferrer">Linkedin</p> : ""
          }
        </div>
      </div>
      <h4>{contact.name}</h4>
      <p>{contact.email}</p>
      <p>{contact.phoneNumber}</p>
      <p>{contact.about}</p>
      <p>{contact.response ? "Waiting for response" : ""}</p>
      <p>{contact.starContact ? "Star Contact" : ""}</p>
      <div className="mutual-contact-grid">
      <p>Mutual Contacts:</p>
      {
        contact.mutuals.map((contact, idx) => (
          contact.mutuals ? 
          <div key={idx} className="mutual-contact">
            <p className="mutual-link" to={`/contacts/${contact._id}`} state={contact}>
              <p>{contact.name}</p>              
            </p>
          </div>
          : ""
        ))        
      }
      </div>
      </div>
    </div> 
   );
}
 
export default EditContact;