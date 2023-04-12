import ContactForm from "../../components/ContactForm/ContactForm";
import './NewContact.css'


export default function NewContact() {
  return (
    <div className="new-contact-page">
      <h1>Add New Contact 📌</h1>
      <ContactForm />
    </div>
  );
}