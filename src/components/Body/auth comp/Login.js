import { useRef , useContext, useEffect } from 'react';
import styles from './Login.module.css';
import { AppContext } from '../../../DB/Context';

const Login = (props)=>{

    
    const Context = useContext(AppContext);
    const email = useRef();
    const Password = useRef();
    const remember = useRef();
    let validEmail=false, validPass=false;
   

    const handleSubmit = e =>{
        e.preventDefault();
        let errors = document.getElementsByClassName('login-error')  
        
        if(email.current.value.toLowerCase()!= localStorage.getItem('email').toLowerCase()){
            errors[0].innerHTML='* invalid e-mail';
            validEmail = false;
        }else{
            errors[0].innerHTML='';
            validEmail = true;
            if(Password.current.value!=localStorage.getItem('password')){
                errors[1].innerHTML='* invalid password';
                validPass = false
            }else{
                errors[1].innerHTML='';
                validPass= true
            }
        }
        if(validEmail&&validPass){
            if(remember.current.checked){
                localStorage.setItem('isRemember',true)
                localStorage.setItem('rememberEmail',email.current.value)
                localStorage.setItem('rememberPassword',Password.current.value)
            }else{
                localStorage.setItem('isRemember',false)
            }
             Context.login(true) ;
             props.close();
        }   
    }
    useEffect(()=>{
        if(localStorage.getItem('isRemember')=='true'){
            email.current.value=localStorage.getItem('rememberEmail');
            Password.current.value=localStorage.getItem('rememberPassword');
        }else if(localStorage.getItem('isRemember')=='false'){
            email.current.value='';
            Password.current.value='';
        }
    })

    return (
        <div className={`${styles.login} `}>
            
            <div className={styles.close} onClick={()=>{props.close()}}>&#x2715;</div>

            <div className={styles.bg}>
                <div className={styles.bgChild1}></div>
                <div className={styles.bgChild2}></div>
                <div className={styles.bgChild3}></div>
            </div>
            <div className={styles.loginDetails}>
                <div className={styles.title}>
                    <h1><span>Log</span> <span>In</span></h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.user}>
                        <input ref={email} placeholder='e-mail..' className={`${styles.userName} ${styles.input}`} />  
                        <span className={`${styles.error} login-error`} ></span>    
                    </div>  
                    <div className={styles.pass}>
                        <input ref={Password} placeholder='password..' className={`${styles.password} ${styles.input}`} />      
                        <span className={`${styles.error} login-error`} ></span>
                    </div> 
                    <input className={styles.submit} type="submit" value="Log In" />
                </form>
                <div className={styles.rememberMe}>
                    <input ref={remember} type="checkbox" /><label> Remember  Me</label>
                </div>
                <div className={styles.forgetPass}>
                    <span>Forget Password..?</span>
                </div>

            </div>
        </div>
    
    );
}
export default Login;
