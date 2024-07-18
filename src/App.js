import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Home from './routes/Home';
import Login from './Components/Login';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  const location = useLocation();
  
  return (
    <div className={`App ${location.pathname === '/signup' ? 'signup-background' : ''}${location.pathname === '/login' ? 'login-background' : ''}`}>

      <Navbar />
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </div>
  );
}

export default App;
