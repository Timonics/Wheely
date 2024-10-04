import React, { createContext, useContext, useState, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAppContext = createContext();

const MyAppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [tokenResponse, setTokenResponse] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const googleAuthIn = useGoogleLogin({
    onSuccess: (token) => {
      setTokenResponse(token);
      setIsAuthenticated(true);
    },
    onError: (error) => {
      console.error(error);
      navigate("/");
    },
  });

  const googleSignOut = () => {
    googleLogout();
    setIsAuthenticated(false);
    setUserProfile(null);
  };

  const googleLoginData = async () => {
    setIsLoading(true)
    try {
      if (tokenResponse) {
        const loginDataResponse = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
              Accept: "application/json",
            },
          }
        );
        setUserProfile(loginDataResponse.data);
        navigate("/");
      }
    } catch (err) {
      console.error("Error", err);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    googleLoginData();
  }, [tokenResponse]);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
    isAuthenticated,
    setIsAuthenticated,
    googleAuthIn,
    googleSignOut,
    userProfile,
    setUserProfile,
    isLoading,
    setIsLoading
  };

  return (
    <MyAppContext.Provider value={contextValue}>
      {children}
    </MyAppContext.Provider>
  );
};

export const useMyAppContext = () => useContext(MyAppContext);

export default MyAppProvider;
