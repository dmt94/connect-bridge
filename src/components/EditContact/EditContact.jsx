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
      <form action="" className='edit-form'>
      <div className="flex-r">
        <button className="edit-btn">Complete Edit</button>
      </div>
      <div className="contact-wrapper">
      <div className="flex-r about-contact-div">
        <div className="flex-c">
          <input type="text" placeholder={contact.name} />
          <input type="text" name="relationship" placeholder={contact.relationship ? contact.relationship : "Relationship"} />
          <img src={contact.image} alt="" className="contact-profile-img" />
          <textarea name="about" id="" cols="30" rows="10" placeholder={contact.about ? contact.about : `About ${contact.name}`}></textarea>
        </div>
        <div>
          <input type="text" name="url" placeholder={contact.url ? contact.url : "Website"} />
          <input type="text" name="linkedin" placeholder={contact.linkedin ? contact.linkedin : "Website"} />
        </div>
      </div>
      
      <input type="text" placeholder={contact.email ? contact.email : "Email"} />
      <input type="text" placeholder={contact.phoneNumber ? contact.phoneNumber : "Phone Number"} />
 
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
      </form>
    </div> 
   );
}
 
export default EditContact;