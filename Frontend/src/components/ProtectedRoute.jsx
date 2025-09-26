import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.error('Please login to access the map', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);

  if (!token) return null;

  return children;
};

export default ProtectedRoute;
