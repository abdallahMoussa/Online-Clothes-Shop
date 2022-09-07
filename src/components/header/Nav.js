import {useRef, useContext} from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';
import InputSearch from './InputSearch';
import { AppContext } from '../../DB/Context';

const Nav = props =>{
   
    const menu = useRef();
    const nav = useRef();
    const toggleSection = useRef();
    const Context = useContext(AppContext);
    let flag = true;
    
    const toggled = ()=>{
       
        if(flag){
            nav.current.style.height='250px';
            setTimeout(()=>toggleSection.current.style.display="flex",500)
        }else{
            nav.current.style.height='70px';
            toggleSection.current.style.display="none"
        }
        flag= !flag;
    }
    let opacity = 0;
    const profileIcon = ()=>{
        menu.current.style.opacity= opacity?opacity=0:opacity=1;
    }

    window.addEventListener('resize',()=>{
        if(window.innerWidth>800){
            let Nav = document.getElementById('nav')
            Nav.style.height='70px';
            }
    })
    return(
        <nav className={styles.nav} id='nav'  ref={nav}>
           <div className={styles.navContent}>   
                <div className={styles.logoToggle}>
                <Link to="/" >
                        <img alt='logo' src="../imgs/logo.png" className={styles.logo}  />
                </Link>
                    <i onClick={toggled} className={styles.toggle}>&#9776;</i>
                </div>

                <div ref={toggleSection} className={styles.toggleSection}>
                    <InputSearch prodNames={props.prodNames}/>
                    <div className={styles.cartJoin}>
                        <Link to="/Cart">
                            <div className={`${styles.cart}`} style={{"--count":`'${props.len?props.len:""}'`}}>
                                <svg viewBox="0 0 640 512" >
                                    <path  className={styles.path} d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                                </svg>
                            </div>
                        </Link>
                    {Context.IsLogIn&&<div onClick={profileIcon} className={styles.profile}>
                                   <span className={styles.profilePic}>
                                        <svg  viewBox="0 0 448 512">
                                                <path className={styles.path} d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                                        </svg>
                                   </span>
                                    <span className={styles.name}>{localStorage.getItem('userName')}</span>
                                    <div ref={menu} className={styles.profileMenu}>
                                        <span onClick={()=>{Context.login(false)}}>Log Out</span>
                                    </div>
                                </div>}
                        {!Context.IsLogIn&&
                                <div className={styles.join}>
                                
                                    <button title="Sign UP" onClick={()=>{props.showCover(1)}} className={styles.button}>
                                        <svg viewBox="0 0 640 512">
                                            <path className={styles.path} d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/>
                                        </svg>
                                    </button>
                                    <button title="Login" onClick={()=>{props.showCover(2)}} className={styles.button}>
                                        <svg viewBox="0 0 540 512">
                                            <path className={styles.path}  d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z"/>    
                                        </svg>    
                                    </button>
                                </div>
                        }
                    </div>
                    
                    <div className={styles.chTheme} onClick={Context.changeTheme} >
                        { Context.LightTheme?<svg viewBox="0 0 640 512">
                                                <path className={styles.path} d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/>                                            
                                            </svg>:
                                            <svg  viewBox="0 0 640 512">
                                                <path className={styles.path} d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"/>
                                            </svg>
                                            }
                        </div>
                </div>
           </div>
        </nav>
    )
}
export default Nav ;