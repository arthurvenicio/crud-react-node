import React, { useEffect, useState, createContext, useContext } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { authConfig } from './config.js'

import './style.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div id="container-load">
        <PulseLoader color={"#008000"} loading={loading}  size={20} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  );
};


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a CountProvider");
  const { user, setUser } = context;
  return { user, setUser };
}