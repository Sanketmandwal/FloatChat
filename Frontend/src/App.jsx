import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FloatChatLanding from './components/FloatChatLanding';
import Login from './components/Login';
import Signup from './components/Signup';
import Chatbot from './components/Chatbot';
import About from './components/About';
import Contact from './components/Contact';
import MapArgo from './components/MapArgo';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FloatChatLanding />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/about' element={<About />} />
          <Route path='/myprofile' element={<ProtectedRoute><Myprofile /></ProtectedRoute>} />

          <Route
            path='/map'
            element={
              <ProtectedRoute>
                <MapArgo />
              </ProtectedRoute>
            }
          />

          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
