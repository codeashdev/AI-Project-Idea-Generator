import React, { useContext } from "react";

import { ProjectContext } from "../../context/projectContext";

export const SelectLanguage = () => {

  const { language, handleLanguageChange } = useContext(ProjectContext);
 
  return (
    <div className="flex justify-center m-5">
      <select
        className=" select bg-[#0D1117] text-white w-full max-w-xs inline "
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="" disabled defaultValue>
          Pick the language
        </option>
        <option value="" disabled>Frameworks||Libraries:</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Svelte">Svelte</option>
        <option value="" disabled>Languages:</option> 
            <option value="VanillaJS">VanillaJS</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
        <option value="" disabled>Mobile:</option> 
            <option value="React Native">React Native</option>
            <option value="Flutter">Flutter</option>
      </select>
    </div>
  );
};

export const SelectPlatform = () => {

    const { platform, handlePlatformChange } = useContext(ProjectContext);
   
    return (
      <div className="flex justify-center m-5">
        <select
          className=" select bg-[#0D1117] text-white w-full max-w-xs inline "
          value={platform}
          onChange={handlePlatformChange}
        >
          <option value="" disabled defaultValue>
            Pick the platform
          </option>
          <option value="Website">Web</option>
          <option value="Mobile App">Mobile</option>
        </select>
      </div>
    );
  };
