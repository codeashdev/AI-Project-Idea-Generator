import React, {
  createContext, useState, useMemo, useCallback,
} from "react";

// Create a context
export const ProjectContext = createContext();

// Create a context provider component
export const ProjectProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [platform, setPlatform] = useState("");
  const [field, setField] = useState("");
  const [responses, setResponses] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = useCallback((event) => {
    setLanguage(event.target.value);
  }, []);

  const handlePlatformChange = useCallback((event) => {
    setPlatform(event.target.value);
  }, []);

  const handleFieldChange = useCallback((event) => {
    setField(event.target.value);
  }, []);

  const generateKey = "Generate one more project idea for a ";
  const criteriaKey = " only 550 charecter give a name to the project";
  const prompt = `${generateKey + platform}, ${field}, using ${language},${criteriaKey}`;

  const contextValues = useMemo(() => ({
    language,
    handleLanguageChange,
    platform,
    handlePlatformChange,
    field,
    handleFieldChange,
    generateKey,
    criteriaKey,
    setResponses,
    responses,
    setLoading,
    loading,
    prompt,
  }), [language, handleLanguageChange, platform,
    handlePlatformChange, field, handleFieldChange, generateKey,
    criteriaKey, setResponses, responses, setLoading, loading, prompt]);

  return (
    <ProjectContext.Provider value={contextValues}>
      {children}
    </ProjectContext.Provider>
  );
};
