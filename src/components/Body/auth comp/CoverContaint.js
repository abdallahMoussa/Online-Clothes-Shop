import { useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import styles from './CoverContent.module.css';

const CoverContaint = ({close,type,redirect})=>{
   const [fadeIn , setFadeIn] = useState(false);

   useEffect(()=>{
    setTimeout(() => {
        setFadeIn(true)
    }, 100);

   },[])

   const closeWindow=()=>{
        setFadeIn(false);
        setTimeout(() => {
            close()
        }, 500);
   }

   return(
        
        <div className={`${styles.outCover} ${fadeIn&&styles.fadeIn}`}>
           
            {type=="LogIn"? <Login close={closeWindow} /> : <SignUp redirect={redirect}  close={closeWindow} />}
        </div>
    );
}

export default CoverContaint;