import * as contactsAPI from '../../utilities/contacts-api';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import './EditContact.css';
import '../ViewContact/ViewContact.css';
import ViewContact from '../ViewContact/ViewContact';

const EditContact = () => {
  const location = useLocation();
  const contactState = location.state;
  const contact = contactState.contact;
  const allContacts = contactState.allContacts;
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const [toggleViewEdit, setToggleViewEdit] = useState(false);

  const [imagePreview, setImagePreview] = useState(contact.image);

  const [currentContact, setcurrentContact] = useState(
    {
      name: contact.name,
      image: contact.image,
      position: contact.position,
      company: contact.company,
      about: contact.about,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      linkedin: contact.linkedin,
      url: contact.url,
      response: contact.response,
      reference: contact.reference,
      relationship: contact.relationship,
      starContact: contact.starContact,
      mutuals: contact.mutuals,
    }
    );

  const goBack = () => {
      navigate(-1);
    }

  async function handleChange(evt) {
    if (evt.target.type === "file") {
      setImagePreview(URL.createObjectURL(evt.target.files[0]))
      setcurrentContact({...currentContact, [evt.target.name]: await convertToBase64(evt.target.files[0])})
    } else if (evt.target.name === "mutuals") {
      let value = Array.from(evt.target.selectedOptions, option => option.value);
      setcurrentContact({...currentContact, [evt.target.name]: value})
    } else {
      if (evt.target.name === "image") {
        setImagePreview(evt.target.value);
      }
      setcurrentContact({...currentContact, [evt.target.name]: evt.target.value });
    }
  }

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

  async function updateContact(id, payload) {
    try {
      const updatedContactDetails = await contactsAPI.updateAContact(id, payload);
      setcurrentContact(updatedContactDetails);

    } catch (err) {
      console.log(err);
    }
  }

  function handleContactImageButton(evt) {
    evt.preventDefault();
    setToggle(!toggle);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const payload = currentContact;
    updateContact(contact._id, payload);
    setToggleViewEdit(!toggleViewEdit);
  }

  return ( 
    <div className="main-contact-div main-edit-contact">
      <button className='wide-delete' onClick={goBack}>Go Back</button>
      {toggleViewEdit ? (
        <>
          <h4>Contact Preview</h4>
          <Link to={`/contacts`} state={{contact, allContacts}}>Back to Contacts</Link>
          <ViewContact contact={currentContact} allContacts={allContacts}/>
        </>
        ) : 
      <form action="" className='edit-form' onSubmit={ handleSubmit }>
        <div className="flex-ctr-ctr flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder={contact.name} onChange={ handleChange } />

          <label htmlFor="relationship">Relationship with Contact:</label>
          <select className='tag' name="relationship" onChange={ handleChange }>
            <option value="Professional" >Professional</option>
            <option value="Colleague">Colleague</option>
            <option value="Friend">Friend</option>
            <option value="Close Friend">Close Friend</option>
            <option value="Family">Family</option>
          </select>
          
          <div className='flex-r edit-image-area'>
            <div className='flex-c'>
            <button className="img-btn" onClick={ handleContactImageButton }>{toggle ? "Upload image" : "Provide URL link"}</button>
            {
              toggle ? (<input type="text" placeholder="Provide Image URL" name="image" onChange={ handleChange } />) : (<input className='file-input' type="file" name="image" onChange={ handleChange } />)
            }
            </div>
            <img src={imagePreview} alt="" className="contact-profile-img" />
          </div>
          <textarea className='tag text-area' name="about" onChange={ handleChange } cols="30" rows="10" placeholder={contact.about ? contact.about : `About ${contact.name}`}></textarea>            
        </div>  

        <div className='flex-col flex-ctr-ctr edit-contact-bottom-div'>
          <label htmlFor="url">Website</label>
          <input type="text" onChange={ handleChange } name="url" placeholder={contact.url ? contact.url : "Website"} />
          <label htmlFor="linkedin">Linkedin</label>
          <input type="text" onChange={ handleChange } name="linkedin" placeholder={contact.linkedin ? contact.linkedin : "Linkedin"} />
        
      
      
        <input type="text" onChange={ handleChange } placeholder={contact.email ? contact.email : "Email"} />
        <input type="text" onChange={ handleChange } placeholder={contact.phoneNumber ? contact.phoneNumber : "Phone Number"} />
        
        <div className="mutual-contact-edit">      
         <label htmlFor="mutuals">Mutual Contacts:</label>
          <select name="mutuals" onChange={ handleChange } multiple className="multiple-select mutuals-select">
            {allContacts.map((contact, idx) => (                
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
              <input type="radio" name="response" value={false} onChange={ handleChange } />
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
              <input type="radio" name="starContact" value={false} onChange={ handleChange } />
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
              <input type="radio" name="reference" value={false} onChange={ handleChange } />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="flex-r">
          <button className="edit-btn" >Complete Edit</button>
          </div>
          </div>
      </form>
      }
    </div> 
   );
}
 
export default EditContact;