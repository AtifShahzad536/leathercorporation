import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('hamlo_admin_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('hamlo_admin_token');
      if (storedToken) {
        try {
          const res = await api.get('/auth/me');
          if (res.data.success) {
            setUser(res.data.admin);
          }
        } catch (err) {
          console.warn('Auth token expired or invalid');
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();

    const handleLogout = () => {
      setUser(null);
      setToken(null);
    };
    window.addEventListener('auth_logout', handleLogout);
    return () => window.removeEventListener('auth_logout', handleLogout);
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    if (res.data.success) {
      localStorage.setItem('hamlo_admin_token', res.data.token);
      localStorage.setItem('hamlo_admin_user', JSON.stringify(res.data.admin));
      setToken(res.data.token);
      setUser(res.data.admin);
      return { success: true };
    }
    return { success: false, message: res.data.message || 'Login failed' };
  };

  const logout = () => {
    localStorage.removeItem('hamlo_admin_token');
    localStorage.removeItem('hamlo_admin_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
