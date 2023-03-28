import { useContext } from "react";

import { ProjectContext } from "../../context/projectContext";

import loadingSVG from "../../assets/loading.svg"

export const Modal = ({handleGenerate}) => {
    const { responses, loading } = useContext(ProjectContext);
    return(
        <div className="m-5">
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn" onClick={handleGenerate}>Generate</label>
        
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
           
            <div className="modal-box">
                {loading ?( <div className="flex items-center justify-center"><img src={loadingSVG} alt="loading"/></div> ):(
                    <>
                <p className="py-4">{responses}</p>
                <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">Thank You!</label> 
                </div>
                </>
                )} 
            </div>
            
            </div>
         </div>
    )
}