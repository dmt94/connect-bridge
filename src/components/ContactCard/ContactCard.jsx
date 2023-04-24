import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactCard.css';
import starImage from '../../assets/sparkle.png';

function ContactCard({contact, deleteContact, allContacts}){

  return ( 
    <div className='flex-c contact-card-outer'>
      <button className='delete-btn' onClick={() => deleteContact(contact._id) }>Del</button>
      <div className="flex-r contact-card">
        <div className="contact-card-info flex-ctr-ctr flex-col">
          <h3>{contact.relationship}</h3>
          <p className='tag reference'>{contact.reference ? "Reference" : ""}</p>
          <h4>{contact.name}</h4>
          <p>{contact.company}</p>
          <p>{contact.position}</p>
          <p>{contact.email}</p>        
          <div>
            <span>{contact.mutuals.length} mutuals</span>
          </div>
        </div>

        <div className="flex-col contact-card-rightc">
          <div className="contact-img-canvas">
            <img className="contact-img" src={`${contact.image}`} alt="represent contact" />
          </div>
          <Link to={`/contacts/${contact._id}`} className='more-links' state={{contactId: contact._id}}>View More</Link>
          <div>
          <img className='star-img' src={starImage} alt="" />
        </div>
        </div>
        
      </div>
    </div>
   );
}
 
export default ContactCard;