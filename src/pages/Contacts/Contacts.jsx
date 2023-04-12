import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Contacts.css';

export default function NavBar({ user, setUser }) {
  return (
    <div className='contacts-div'>
      <h1>Contacts</h1>
      <Link to='/contacts/new' className=''>Add New Contact</Link>
    </div>
  );
}