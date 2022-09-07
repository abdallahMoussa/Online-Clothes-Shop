import { createPortal } from "react-dom";
import CoverContaint from './CoverContaint'



const OutCover= props=>{
    
    const close = ()=>{
        props.showCover(false)
    }
    const redirect = ()=>{
        props.showCover(2)
    }
    return (
        <> 
        {createPortal(
            <CoverContaint redirect={redirect} close={close} type={props.type} />,
             document.getElementById('outCover')
             )}
        </>
    );
}

export default OutCover;