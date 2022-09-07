import styles from './SignUp.module.css';
import { useContext, useRef } from 'react';
import { AppContext } from '../../../DB/Context';
import CompleteAlert from '../alert comp/CompleteAlert';

const SignUp = (props)=>{

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confPass = useRef();
    const Context = useContext(AppContext)

    const handleSubmit = e =>{
        e.preventDefault();
        let errors = document.getElementsByClassName('error');
        let numberPattern = /[0-9]/
    //validity checking

    // name validity
        numberPattern.test(name.current.value)?
        errors[0].innerHTML='* invalid name, remove numbers':
        name.current.value.length<6 ?
            (errors[0].innerHTML='* Name too short'):
            (errors[0].innerHTML='<i> &#10003;</i>');
    //email validity
        email.current.value.includes('@')?
            (errors[1].innerHTML='<i> &#10003;</i>'):
            ( errors[1].innerHTML='* invalid e-mail');
    // password validity
        password.current.value.length>7?
            (errors[2].innerHTML='<i> &#10003;</i>'):
            ( errors[2].innerHTML='* password too short');

        confPass.current.value==password.current.value&& password.current.value!=''?
            (errors[3].innerHTML='<i> &#10003;</i>'):
            ( errors[3].innerHTML='* password doesn`t match');

    //commit validtity         
        if(Array.from(errors).filter(e=>{return e.children.length>0}).length==4){
            localStorage.setItem("userName",name.current.value);
            localStorage.setItem("email",email.current.value);
            localStorage.setItem("password",password.current.value);
            CompleteAlert('Registration Success.');
            props.close()  
            setTimeout(() => {
                props.redirect()
            }, 2000);     
        }
    }

    return (
        <div className={`${styles.signUp} `}>
            
            <div className={styles.close} onClick={()=>{props.close()}}>&#x2715;</div>
            
            <div className={styles.bg}>
                <div className={styles.bgChild1}></div>
                <div className={styles.bgChild2}></div>
                <div className={styles.bgChild3}></div>
            </div>
            <div className={styles.SignDetails}>
                <div className={styles.title}>
                    <h1><span>Sign</span> <span>Up</span></h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.SignForm}>
                <div className={styles.fullName}>
                        <label> Name</label>
                        <input ref={name} className={`${styles.input}`} />  
                        <span className={`${styles.error} error`} ></span>    
                    </div>
                    <div className={styles.email}>
                        <label>Email</label>
                        <input ref={email} className={` ${styles.input}`} />  
                        <span className={`${styles.error} error`} ></span>    
                    </div>
                    <div className={styles.password}>
                        <label>Password</label>
                        <input ref={password} className={` ${styles.input}`} />  
                        <span className={`${styles.error} error`} ></span>    
                    </div> 
                    <div className={styles.password}>
                        <label>Confirm Password</label>
                        <input ref={confPass} className={` ${styles.input}`} />  
                        <span className={`${styles.error} error`} ></span>    
                    </div>       
                    
                    <input className={styles.submit} type="submit" value="Sign Up" />
                </form>

            </div>
        </div>

    );
}

export default SignUp;