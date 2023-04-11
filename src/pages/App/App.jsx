import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">      
      { user ?
        <Routes>
          <NavBar user={user} setUser={setUser} />
          <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
