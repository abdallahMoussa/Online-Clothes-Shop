import { memo , useEffect, useState } from 'react';
import styles from './Slider.module.css'
import Slide from './Slide';
import data from '../../DB/slider data.json'
import Indicator from './Indicator';


const Slider = props =>{

    const initArray = new Array(5).fill(false);

    const [slides , setSlides] = useState([true,...initArray])
    
    var slide=[false,...initArray],
        cursor

    const change =()=>{
        slides.map((s,i)=>
            s?cursor=i:null
        )
        slide[(cursor+1)%slides.length]=true;
        setSlides(slide)
    }
    
    useEffect(()=>{
       const time = setTimeout(() => {
        change()
       }, 6000);
       return()=>{clearTimeout(time)}
    },[slides]);

    const changeIndicator = index =>{
        slide[index]=true;
        setSlides(slide)
    } 
    return(
        <div className={styles.slider}>
            <div className={styles.slide}>
                { slides.map((s,i)=>{
                    return s&&<Slide key={i} slideData={data[i]}  link={'/Products'} />
                })} 
            </div> 
            <div className={styles.inecators}>
                
                { slides.map((s,i)=>{
                        return <Indicator key={i}  index={i} active={slides[i]} change={changeIndicator} />
                })}
               
            </div>
        </div>
    )
}

export default memo(Slider);