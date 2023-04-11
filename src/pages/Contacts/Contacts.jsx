import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Contacts.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className=''>
      <h1>Contacts</h1>
    </div>
  );
}