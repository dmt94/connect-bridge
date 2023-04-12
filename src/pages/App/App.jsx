import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import Applications from '../Applications/Applications';
import Contacts from '../Contacts/Contacts'
import NewApplication from '../NewApplication/NewApplication';
import NewContact from '../NewContact/NewContact';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">      
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/new" element={<NewApplication />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/new" element={<NewContact />} />
          <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
