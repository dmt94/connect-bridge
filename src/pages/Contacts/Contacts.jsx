import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as contactsAPI from '../../utilities/contacts-api';
import './Contacts.css';
import ContactCard from '../../components/ContactCard/ContactCard';

export default function Contacts() {

  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();
 
  useEffect(function() {
    async function getContacts() {
      const contactsReceived = await contactsAPI.getAllContacts();
      setContacts(contactsReceived);
    }
    getContacts();
  }, []);

  async function deleteContact(id) {
    const updatedContact = await contactsAPI.deleteAContact(id);
    setContacts(updatedContact);
    navigate(0);
  }

  return (
    <div className='contacts-div'>
      <h1>Contacts</h1>
      <Link to='/contacts/new' className='' state={ contacts } >Add New Contact</Link>
      <div className='contact-grid'>
        {
          contacts.map((contact, idx) => (
            <ContactCard key={idx} contact={ contact } deleteContact={ deleteContact } allContacts={contacts} />            
          ))
        }

      </div>
    </div>
  );
}