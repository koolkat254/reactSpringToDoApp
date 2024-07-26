// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getCurrentUser,
  isAuthenticated,
  logout as authServiceLogout,
  login as authServiceLogin,
} from "../services/AuthService";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const user = await authServiceLogin(email, password);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const handleLogout = () => {
    authServiceLogout();
    setUser(null);
    window.location.href = "/login"; // Redirect after logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated: isAuthenticated(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
