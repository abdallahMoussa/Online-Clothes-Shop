import styles from './Slide.module.css';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Slide = props =>{
    const [fadeIn , setFadeIn] =useState(false)
    useEffect( ( )=>{
        setTimeout(()=>{
            setFadeIn(true)
        },10)
        setTimeout(()=>{
            setFadeIn(false)
        },5000)

    },[]);
    
    return(
        <div className={` ${fadeIn?styles.slide:styles.fadeOut} `} >
            
            <div className={styles.texture}>
                <h4 className={styles.title}>{props.slideData.title}</h4><br/>
                <h1 className={styles.headline}>{props.slideData.headline}</h1>
                <p className={styles.desc}>{props.slideData.desc+ props.slideData.desc }</p>
                <Link to={props.link}>
                    <button className={styles.discover}>discover Now</button>
                </Link>
            </div>
            <div className={styles.slideImg} >
                <img src={props.slideData.img} alt="slide" />
            </div> 

        </div>
    );
}

export default Slide;