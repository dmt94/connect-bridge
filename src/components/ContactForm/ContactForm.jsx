import "./ContactForm.css";
import { useState } from "react";
import * as contactsAPI from '../../utilities/contacts-api';
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  // const [contactImage, setContactImage] = useState({myFile: ""});

  const [contact, setContact] = useState(
    {
      name: "",
      image: "",
      position: "",
      company: "",
      about: "",
      email: "",
      phoneNumber: "",
      linkedin: "",
      url: "",
      response: false,
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
    if (evt.target.name === "image") {
      setContact({...contact, [evt.target.name]: await convertToBase64(evt.target.files[0])})
    } else {
      setContact({...contact, [evt.target.name]: evt.target.value });
    }
    console.log("handleChange", contact)
  }

  // async function handleFileUpload(evt) {
  //   const file = evt.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   console.log(`base64: ${base64}, file: ${file}`);
  //   setContactImage({...contactImage, myFile: base64});
  //   setContact({...contact, image: base64})
  //   console.log("handle file upload", contact);
  // }

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
        
          <label htmlFor="name">*Name:</label>
          <input type="text" name="name" required onChange={handleChange} />

          <label htmlFor="image">Image:</label>
          <input type="file" name="image" onChange={handleChange} />
        
          <label htmlFor="company">Company:</label>
          <input type="text" name="company" onChange={handleChange} />

          <label htmlFor="position">Position:</label>
          <input type="text" name="position" onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={handleChange} />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" name="phoneNumber" onChange={handleChange} />

          <label htmlFor="linkedin">Linkedin:</label>
          <input type="text" name="linkedin" onChange={handleChange} />

          <label htmlFor="url">URL:</label>
          <input type="text" name="url" onChange={handleChange} />

          <label htmlFor="response">Waiting for response? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="response" value="yes" onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="response" value="no" checked onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <label htmlFor="starContact">Star Contact? </label>
          <div className="flex-r">
            <div className="radio-div">
              <input type="radio" name="starContact" value="yes" onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
            </div>

            <div className="radio-div">
              <input type="radio" name="starContact" value="no" checked onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <label htmlFor="relationship">Relationship with Contact:</label>
          <select name="relationship" onChange={handleChange}>
            <option value="Professional" defaultChecked>Professional</option>
            <option value="Colleague">Colleague</option>
            <option value="Friend">Friend</option>
            <option value="Close Friend">Close Friend</option>
            <option value="Family">Family</option>
          </select>

          <label htmlFor="about">About:</label>
          <textarea type="text" name="about" onChange={handleChange} />

          <div className="flex-c select-contacts-div">
            <span>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</span>
          </div>
          <div className="select-contacts-div">
              <label htmlFor="mutuals">Mutual Contacts:</label>
              <select name="mutuals" onChange={handleChange} multiple className="multiple-select">
                <option value="">Contact 1...</option>
                <option value="">Contact 2...</option>
                <option value="">Contact 3...</option>
              </select>
          </div>
          
        <button type="submit">Add Contact</button>
      </form> 
    </div>
   );
}
 
export default ContactForm;