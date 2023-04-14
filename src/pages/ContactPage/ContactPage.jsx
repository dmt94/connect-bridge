import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();
  const contact = location.state;
  return ( 
    <>
      <h2>Contact Page</h2>
      <h4>{contact.name}</h4>
    </>
   );
}
 
export default ContactPage;