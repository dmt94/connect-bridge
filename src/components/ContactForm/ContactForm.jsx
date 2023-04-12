import "./ContactForm.css";
import { useState } from "react";
import * as contactsAPI from '../../utilities/contacts-api';
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
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
    <div className="contact-form">
      <form action="" className="" onSubmit={ handleSubmit }>
        
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required onChange={handleChange} />
        
          <label htmlFor="company">Company:</label>
          <input type="text" name="company" required onChange={handleChange} />

          <label htmlFor="position">Position:</label>
          <input type="text" name="position" required onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" required onChange={handleChange} />

          <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" name="phone-number" required onChange={handleChange} />

          <label htmlFor="linkedin">Linkedin:</label>
          <input type="text" name="linkedin" required onChange={handleChange} />

          <label htmlFor="url">URL:</label>
          <input type="text" name="url" required onChange={handleChange} />

          <label>Waiting for response? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="response" value="yes" />
              <label for="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="response" value="no" checked />
              <label for="no">No</label>
            </div>
          </div>

          <label>Star Contact? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="star" value="yes" />
              <label for="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="star" value="no" checked />
              <label for="no">No</label>
            </div>
          </div>

          <label htmlFor="relationship">Relationship with Contact:</label>
          <select name="relationship" required>
            <option value="Professional" selected>Professional</option>
            <option value="Colleague">Colleague</option>
            <option value="Friend">Friend</option>
            <option value="Close Friend">Close Friend</option>
            <option value="Family">Family</option>
          </select>

          <label htmlFor="about">About:</label>
          <textarea type="text" name="about" required onChange={handleChange} />

          <label htmlFor="mutuals">Mutual Contacts:</label>
          <select name="mutuals" required onChange={handleChange}>
            <option value="">Contact 1...</option>
          </select>
          
        <button type="submit">Add Contact</button>
      </form> 
    </div>
   );
}
 
export default ContactForm;