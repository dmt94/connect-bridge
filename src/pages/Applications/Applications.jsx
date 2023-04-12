import { Link } from 'react-router-dom';
import './Applications.css';

export default function Applications() {
  return (
    <div className='application-div'>
      <h1>All Applications</h1>
      <Link to='/applications/new' className=''>Add New Application</Link>
    </div>
  );
}