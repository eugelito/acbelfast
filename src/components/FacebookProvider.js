import React, { createContext, useContext } from "react";
import { FacebookProvider } from "react-facebook";

const FacebookContext = createContext(null);

export const useFacebook = () => {
  return useContext(FacebookContext);
};

export const FacebookProviderWrapper = ({ appId, children }) => {
  return (
    <FacebookContext.Provider value={{ appId }}>
      <FacebookProvider appId={appId}>{children}</FacebookProvider>
    </FacebookContext.Provider>
  );
};
