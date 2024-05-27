'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
  profileImg: string;
  setProfileImg: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [profileImg, setProfileImg] = useState<string>('');

  return (
    <GlobalContext.Provider value={{ profileImg, setProfileImg }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};