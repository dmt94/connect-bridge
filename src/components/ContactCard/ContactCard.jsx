import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactCard.css';
import * as contactsAPI from '../../utilities/contacts-api';

function ContactCard({contact, deleteContact, getAContact, mutuals}){

  return ( 
    <div className="flex-r contact-card">
      <div className="contact-card-info">
        <h3>{contact.relationship}</h3>
        <h4>{contact.name}</h4>
        <p>{contact.company}</p>
        <p>{contact.position}</p>
        <p>{contact.email}</p>
        <div>
          <span>Mutuals:</span>
          {
            contact.mutuals ? contact.mutuals.map((mutual, idx) => (
              <p key={idx}>{mutual.name}</p>
              // <p key={idx}>{mutualId}</p>
            )) : "doesnt exist"
          }       
        </div>

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