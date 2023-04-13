import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as contactsAPI from '../../utilities/contacts-api';
import './Contacts.css';
import ContactCard from '../../components/ContactCard/ContactCard';

export default function NavBar({ user, setUser }) {

  const [contacts, setContacts] = useState([]);
  
  useEffect(function() {
    async function getContacts() {
      const contactsReceived = await contactsAPI.getAllContacts();
      setContacts(contactsReceived);
    }
    getContacts();
  }, []);

  return (
    <div className='contacts-div'>
      <h1>Contacts</h1>
      <Link to='/contacts/new' className=''>Add New Contact</Link>
      <div className='contact-grid'>
        {
          contacts.map((contact, idx) => (
            <ContactCard key={idx} contact={ contact } />
          ))
        }

      </div>
    </div>
  );
}