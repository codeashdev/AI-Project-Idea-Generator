import React, { useContext } from "react";

import { ProjectContext } from "../../context/projectContext";

export const UserInput = () => {
      const { field, handleFieldChange } = useContext(ProjectContext);
      
    return (
        <div className="flex flex-col items-center justify-center">
        <p className="text-white text-center mt-5 text-lg italic">Want to specify the field of the project?</p>
        <input type="text" value={field} onChange={handleFieldChange} placeholder=" e.g. AI based" className=" input input-bordered w-full max-w-xs m-2 bg-[#0D1117] text-white" />
        </div>
    )
}