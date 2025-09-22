import { createContext, useContext, useState } from "react";

// Create context
const ViewContext = createContext();

// Provider component
export const ViewProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("store"); // default view

  const switchView = (view) => setCurrentView(view);

  return (
    <ViewContext.Provider value={{ currentView, switchView }}>
      {children}
    </ViewContext.Provider>
  );
};

// Custom hook to use view context
export const useView = () => useContext(ViewContext);
