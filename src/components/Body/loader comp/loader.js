import { useEffect, useRef } from 'react';
import styles from './loader.module.css';

const Loader = ()=>{
    const loaderRef = useRef();
    
    useEffect(()=>{ 
        loadingPoints()
    },[])

    const loadingPoints=()=>{
        let index=-1;
        let interval = setInterval(() => {
            
           if(loaderRef.current){
                let point = document.getElementsByClassName('loadPoint');
                index++ ;
                point[index%4].style.cssText="width:70%;height:70%;";
                let timeout = setTimeout(()=>{
                    clearTimeout(timeout);
                    if(loaderRef.current)
                        point[index%4].style.cssText="width:10px;height:10px";
                },500)
           }else{
                clearInterval(interval)
           }
            
        }, 700);
    };

    
    return <>
        <div ref={loaderRef} className={styles.loader}>
                <div className={styles.words}>
                    <div id='loadingWords' className={styles.loading}>
                        <span className='loadSpan'>Shopping</span>
                        <span className='loadSpan'>Home</span>
                    </div>
                </div>
                <div  className={styles.points}>
                    <div><span className='loadPoint'></span></div>
                    <div><span className='loadPoint'></span></div>
                    <div><span className='loadPoint'></span></div>
                    <div><span className='loadPoint'></span></div>
                  
                </div>
        </div>
    </>
}

export default Loader;