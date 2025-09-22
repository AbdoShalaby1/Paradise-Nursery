import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [showHero, setShowHero] = useState(true);

  return (
    <PageContext.Provider value={{ showHero, setShowHero }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}
