import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './dashboard/LandingPage';
import Navbar from './dashboard/navigation/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './dashboard/HomePage';
import ServicePage from './dashboard/ServicePage';
import ContactUsPage from './dashboard/ContactUsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route path='' element={<HomePage />} />
        <Route path='/services' element={<ServicePage/>} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// root file 

reportWebVitals();
