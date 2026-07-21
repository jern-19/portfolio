import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const checkUser = async () => {

      try {
        //const response = await api.get("/auth/me");
        //setUser(response.data.user);

      } catch (error) {

        setUser(null);

      } finally {

        setLoading(false);

      }

    };


    checkUser();

  }, []);



  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}