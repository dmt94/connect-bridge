import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as contactsAPI from '../../utilities/contacts-api';
import './Contacts.css';
import ContactCard from '../../components/ContactCard/ContactCard';

export default function Contacts({ user, setUser }) {

  const [contacts, setContacts] = useState([]);
 
  
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
  }

  // useEffect(function() {
  //   getAContact()
  // }, [contacts])

  async function getAContact(id="") {
    const contact = await contactsAPI.getContact(id);
    console.log("contact received", contact);
    return contact;
  }

  return (
    <div className='contacts-div'>
      <h1>Contacts</h1>
      <Link to='/contacts/new' className='' state={ contacts } >Add New Contact</Link>
      <div className='contact-grid'>
        {
          contacts.map((contact, idx) => (
            <ContactCard key={idx} contact={ contact } deleteContact={ deleteContact }/>
          ))
        }

      </div>
    </div>
  );
}