import { Link } from "react-router-dom";
import './ViewContact.css';

const ViewContact = ({ contact }) => {
  return ( 
    <div className="main-div">
      <div className="contact-wrapper">
      <div className="flex-r about-contact-div">
        <div>
      <p>{contact.starContact ? "⭐ Star Contact ⭐" : ""}</p>
          <p className="tag">{contact.relationship}</p>
          <img src={contact.image} alt="" className="contact-profile-img" />
        </div>
        <div>
          {
            contact.url ? <a href={`${contact.url}`} target="_blank" rel="noreferrer">Website</a> : ""
          }
          {
            contact.linkedin ? <a href={`${contact.linkedin}`} target="_blank" rel="noreferrer">Linkedin</a> : ""
          }
        </div>
      </div>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.phoneNumber}</p>
      <p>{contact.about}</p>
      <p>{contact.response ? "Waiting for response" : ""}</p>
      <div className="mutual-contact-grid">
      <p>Mutual Contacts:</p>
      {
        contact.mutuals ? 
        contact.mutuals.map((contact, idx) => (
          <div key={idx} className="mutual-contact">
            <Link className="mutual-link" to={`/contacts/${contact._id}`} state={{contactId: contact._id}}>
              <p>{contact.name}</p>              
            </Link>
          </div>
        )) : ""        
      }
      </div>
      </div>
    </div> 
    );
}
 
export default ViewContact;