import ContactForm from "../../components/ContactForm/ContactForm";
import './NewContact.css';
import { useLocation } from "react-router-dom";


export default function NewContact() {
  const location = useLocation();
  const contacts = location.state;
  return (
    <div className="new-contact-page flex-ctr-ctr flex-col">
      <h1>Add New Contact 📌</h1>
      <ContactForm contacts={ contacts } />
    </div>
  );
}