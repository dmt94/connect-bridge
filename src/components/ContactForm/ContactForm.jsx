import { useState } from "react";
import * as contactsAPI from '../../utilities/contacts-api';
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = ({ contacts }) => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const [contact, setContact] = useState(
    {
      name: "",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      position: "",
      company: "",
      about: "",
      email: "",
      phoneNumber: "",
      linkedin: "",
      url: "",
      response: false,
      reference: false,
      relationship: "Professional",
      starContact: false,
      mutuals: [],
    }
    );

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  
  async function handleChange(evt) {
    if (evt.target.type === "file") {
      setContact({...contact, [evt.target.name]: await convertToBase64(evt.target.files[0])})
    } else if (evt.target.name === "mutuals") {
      let value = Array.from(evt.target.selectedOptions, option => option.value);
      setContact({...contact, [evt.target.name]: value})
    } else {
      setContact({...contact, [evt.target.name]: evt.target.value });
    }
  }

  function handleContactImageButton(evt) {
    evt.preventDefault();
    setToggle(!toggle);
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
      <form action="" className="flex-col flex-ctr-ctr inner-contact-form" onSubmit={ handleSubmit }>
        
          <label className="required-text" htmlFor="name">*Name:</label>
          <input type="text" name="name" required onChange={handleChange} />

          <label htmlFor="image">Profile Photo</label>
          
          <div className="flex-ctr-ctr flex-r profile-photo-div">
          <button className="img-btn" onClick={ handleContactImageButton }>{toggle ? "Upload image" : "Provide URL link"}</button>
          {
            toggle ? (<input type="text" placeholder="Provide Image URL" name="image" onChange={ handleChange } />) : (<input type="file" name="image" onChange={ handleChange } />)
          }
          </div>
        
          <label htmlFor="company">Organization:</label>
          <input type="text" name="company" onChange={ handleChange } />

          <label htmlFor="position">Occupation:</label>
          <input type="text" name="position" onChange={ handleChange } />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={ handleChange } />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" name="phoneNumber" onChange={handleChange} />

          <label htmlFor="linkedin">Linkedin:</label>
          <input type="text" name="linkedin" onChange={ handleChange } />

          <label htmlFor="url">URL:</label>
          <input type="text" name="url" onChange={ handleChange } />

          <label htmlFor="relationship">Relationship with Contact:</label>
          <select className="tag" name="relationship" onChange={ handleChange }>
            <option value="Professional" defaultChecked>Professional</option>
            <option value="Colleague">Colleague</option>
            <option value="Friend">Friend</option>
            <option value="Close Friend">Close Friend</option>
            <option value="Family">Family</option>
          </select>

          <label htmlFor="about">About:</label>
          <textarea type="text" name="about" onChange={ handleChange } />

          <div className="flex-c select-contacts-div">
          </div>
          <div className="select-contacts-div">
              <label htmlFor="mutuals">Mutual Contacts:</label>
              <select name="mutuals" onChange={ handleChange } multiple className="multiple-select">
                
                {contacts.map((contact, idx) => (                  
                  <option key={idx} value={contact._id}>{contact.name}</option>
                ))}

              </select>
          </div>

          <label htmlFor="response">Waiting for response? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="response" value={true} onChange={ handleChange } />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="response" value={false} checked onChange={ handleChange } />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <label htmlFor="starContact">Star Contact? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="starContact" value={true} onChange={ handleChange } />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="starContact" value={false} checked onChange={ handleChange } />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <label htmlFor="reference">A reference? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="reference" value={true} onChange={ handleChange } />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="reference" value={false} checked onChange={ handleChange } />
              <label htmlFor="no">No</label>
            </div>
          </div>
          
        <button type="submit">Add Contact</button>
      </form> 
    </div>
   );
}
 
export default ContactForm;