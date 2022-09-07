import { useEffect, useRef, useState } from 'react';
import styles from './HomeSection.module.css';
import SectionProducts from './SectionProducts';

const HomeSection = props =>{
    const [show , setShow] = useState(true);
    const section = useRef();
    var top;
        
    top < window.scrollY+400&&setShow(false)
    window.addEventListener('scroll',()=>{  
        top < window.scrollY+400&&setShow(false)
    })
    useEffect(()=>{
         top = section.current.offsetTop
    },[])
    
    return(<>
        
        <section
         ref={section}
         className={` sec ${show?styles.fade:undefined} ${styles.section} `}
         style={{'--direction': props.position=='left'?'row':'row-reverse'}}>

            <div className={`${styles.img}`}>
                <img src={props.img}  />
            </div>
            <div className={`${styles.texture}`}>
                {props.children}
            </div>
            
        </section>
        <SectionProducts />
        </>
    )
}
export default HomeSection;