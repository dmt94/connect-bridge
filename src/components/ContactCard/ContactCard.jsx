import './ContactCard.css';

const ContactCard = ({contact}) => {
  return ( 
    <div className="flex-r contact-card">
      <div className="flex-c contact-card-info">
        <h3>{contact.relationship}</h3>
        <h4>{contact.name}</h4>
        <p>{contact.company}</p>
        <p>{contact.position}</p>
        <p>{contact.email}</p>
      </div>
      <div className="flex-c">
        <img className="contact-img" src={`${contact.image}`} alt="represent contact" />
      </div>
    </div>
   );
}
 
export default ContactCard;