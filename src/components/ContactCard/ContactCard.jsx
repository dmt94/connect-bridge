const ContactCard = ({contact}) => {
  return ( 
    <div className="flex-r">
      <div className="flex-c">
        <h3>{contact.relationship}</h3>
        <h1>{contact.name}</h1>
        <p>{contact.company}</p>
        <p>{contact.position}</p>
        <p>{contact.email}</p>
      </div>
      <div className="flex-c">
        <img src={`${contact.image}`} alt="represent contact" />
      </div>
    </div>
   );
}
 
export default ContactCard;