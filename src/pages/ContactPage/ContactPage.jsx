import { useLocation, useNavigate, Link } from "react-router-dom";
import './ContactPage.css';

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contact = location.state;

  const goBack = () => {
    navigate(-1);
  }

  return ( 
    <>
      <h2>Contact Page</h2>
      <button onClick={goBack} className="btn-light">Go Back</button>
      <div className="flex-r about-contact-div">
        <div>
          <p>{contact.relationship}</p>
          <img src={contact.image} alt="" className="contact-profile-img" />
        </div>
        <div>
          <a href={`https://${contact.url}`} target="_blank" rel="noreferrer">GITHUB</a>
        </div>
      </div>
      <h4>{contact.name}</h4>
      <p>{contact.email}</p>
      <p>{contact.phoneNumber}</p>
      <p>{contact.about}</p>
      <p>{contact.response ? "Waiting for response" : ""}</p>
      <p>{contact.starContact ? "Star Contact" : ""}</p>
      <p>Mutual Contacts:</p>
      <ul>
      {
        contact.mutuals.map((contact, idx) => (
          contact.mutuals ? 
          <li key={idx}>
            <Link className="mutual-link" to={`/contacts/${contact._id}`} state={contact}>
              <p>{contact.name}</p>
            </Link>
            <p>Your {contact.relationship}</p>
          </li> : ""
        ))
      }
      </ul>
    </>
   );
}
 
export default ContactPage;