import "./NewContact.css";
import { useState } from "react";
import * as contactsAPI from '../../utilities/contacts-api';
import { useNavigate } from "react-router-dom";

const NewContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState(
    {
      text: ""
    }
    );
  
  function handleChange(evt) {
    setContact({...contact, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (contact) {
      await contactsAPI.createContact(contact);
    }
    setContact({[evt.target.name]: evt.target.value});
    navigate('/contacts');
  }
  return ( 
    <>
      <form action="" className="flex-c" onSubmit={ handleSubmit }>
        <textarea name="new-contact" cols="30" rows="10"
        onChange={ handleChange }
        ></textarea>
        <button type="submit">Add Contact</button>
      </form> 
    </>
   );
}
 
export default NewContact;