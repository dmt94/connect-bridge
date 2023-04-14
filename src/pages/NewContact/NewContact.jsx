import ContactForm from "../../components/ContactForm/ContactForm";
import './NewContact.css';
import { useLocation } from "react-router-dom";


export default function NewContact() {
  const location = useLocation();
  const contacts = location.state;
  console.log("CONTACTS", contacts);
  return (
    <div className="new-contact-page">
      <h1>Add New Contact 📌</h1>
      <ContactForm contacts={ contacts } />
    </div>
  );
}