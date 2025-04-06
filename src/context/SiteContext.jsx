"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuContent, setmobileMenuContent] = useState(false);

  const [modalFrame, setModalFrame] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  return (
    <SiteContext.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        mobileMenuContent,
        setmobileMenuContent,
        modalFrame,
        setModalFrame,
        backDrop,
        setBackDrop,
        currentHash,
        setCurrentHash,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
