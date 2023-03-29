import React, { createContext, useState } from 'react';

// Create a context
export const ProjectContext = createContext();

// Create a context provider component
export const ProjectProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [platform, setPlatform] = useState("");
  const [field, setField] = useState("");
  const [responses, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleFieldChange = (event) => {
    setField(event.target.value);
  };

  const generateKey = "Generate one more project idea for a "; 
  const criteriaKey = " only 550 charecter give a name to the project";
  const prompt = generateKey+platform+", "+field+", using "+language+","+criteriaKey;
  
  const contextValues = {
    language,
    handleLanguageChange,
    platform,
    handlePlatformChange,
    field,
    handleFieldChange,
    generateKey,
    criteriaKey,
    setResponse,
    responses,
    setLoading,
    loading,
    prompt,
  };

  return (
    <ProjectContext.Provider value={contextValues}>
      {children}
    </ProjectContext.Provider>
  );
};
