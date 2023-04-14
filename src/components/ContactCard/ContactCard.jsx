import { Link } from 'react-router-dom';
import './ContactCard.css';

const ContactCard = ({contact, deleteContact}) => {
  return ( 
    <div className="flex-r contact-card">
      <div className="flex-c contact-card-info">
        <h3>{contact.relationship}</h3>
        <h4>{contact.name}</h4>
        <p>{contact.company}</p>
        <p>{contact.position}</p>
        <p>{contact.email}</p>
        
      </div>
      <div className="flex-c contact-card-rightc">
        <div className="contact-img-canvas">
          <img className="contact-img" src={`${contact.image}`} alt="represent contact" />
        </div>
        <Link to="" className='more-links'>View More</Link>
        <button className='delete-btn' onClick={() => deleteContact(contact._id) }>Delete</button>
      </div>
    </div>
   );
}
 
export default ContactCard;