// src/components/ProtectedRoute.js

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // If not authenticated, redirect to login page
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default ProtectedRoute;
