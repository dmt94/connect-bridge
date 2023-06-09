import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className='navbar'>
      <nav className='flex-r'>
        <div>
          <Link to="/" className="nav-link">About</Link>
          &nbsp; | &nbsp; 
          <Link to="/applications" className="nav-link">Application</Link>
          &nbsp; | &nbsp; 
          <Link to="/contacts" className="nav-link">Contacts</Link>
          &nbsp; | &nbsp; 
          <Link to="" onClick={ handleLogOut } className="nav-link">Log out</Link>
        </div>
        <div>
          <span>Welcome, {user.name}!</span>
        </div>
      </nav>
      <hr />
    </div>
  );
}