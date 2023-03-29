import { useContext } from "react";

import { ProjectContext } from "../../context/projectContext";

import loadingSVG from "../../assets/loading.svg"

export const Modal = ({handleGenerate}) => {
    const { responses, loading, platform, language } = useContext(ProjectContext);

    return(
        <div className="m-5">
            {/* The button to open modal */}
            {!platform||!language ? (   
            <label className="btn  hover:bg-[#0D1117] text-red" >Please select a value for platform and language!</label>
            ) :
            (<label htmlFor="my-modal-6" className="btn hover:bg-[#0D1117]" onClick={handleGenerate}>Generate</label>
            )}

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            {loading ?( <div className="flex items-center justify-center"><img src={loadingSVG} alt="loading"/></div> 
            ):(
                <>
                <p className="py-4">{responses}</p>
                <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn hover:bg-[#0D1117]">Thank You!</label> 
                </div>
                </>
            )} 
            </div>
         
            </div>
            
           
        </div>
    )
}