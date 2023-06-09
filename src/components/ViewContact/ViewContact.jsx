import { Link } from "react-router-dom";
import './ViewContact.css';

const ViewContact = ({ contact }) => {
  
  function starContact(type) {
    return type === 'star' ? `tag important-tag star-contact-view` : `tag`;
  }


  return ( 
    <div className="main-div">
      <div className="contact-wrapper">
        <p className={contact.starContact ? starContact("star") : ""}>{contact.starContact ? "⭐ Star Contact ⭐" : ""}</p>
        <div className="flex-r flex-ctr-ctr contact-top">
          <p>{contact.email}</p>
          <p>{contact.phoneNumber}</p>
        </div>
        <div className="about-contact-div">
           <div>
              {
                contact.url ? <a className="tag url-tag" href={`${contact.url}`} target="_blank" rel="noreferrer">Website</a> : ""
              }
              {
                contact.linkedin ? <a className="tag url-tag" href={`${contact.linkedin}`} target="_blank" rel="noreferrer">Linkedin</a> : ""
              }
            </div>
            <img src={contact.image} alt="" className="contact-profile-img" />            
            <span className="tag relationship-tag">{contact.relationship}</span>
            <div className="contact-tag-area">
              <p className="tag company-tag contact-tag">{contact.reference ? "Reference" : ""}</p>
              <p className="tag waiting">{contact.response ? "Waiting for response" : ""}</p>
            </div>
         </div>

         <div className="flex-ctr-ctr flex-col contact-main-info">
          <h1>{contact.name}</h1>
          <p className="contact-about">{contact.about}</p>
          <hr />
          <p>Mutual Contacts:</p>
          <div className="mutual-contact-grid">
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
    </div> 
    );
}
 
export default ViewContact;