import React, { useImperativeHandle, useState } from 'react';
import styles from './ColorPanel.module.css'

const ColorPanel = React.forwardRef((props,ref) =>{

    const {colors,init} = props;
    const [selected , setSelect] =useState(init);
   

    const selectColor=(e)=>{
        setSelect(e.target.getAttribute('alt'))
    }
    useImperativeHandle(ref,()=>{
        return{
            color:selected,
        }
    })

    return(
        <div ref={ref} className={styles.colors}>
            <div className={styles.label}>
                <span>Color: </span>
            </div>
           <div  className={styles.colorPanel}>
           {
                colors.map(c=>{
                   return <div alt={c[0]} onClick={selectColor} key={c[0]} className={`${styles.color} ${selected===c[0]&&styles.selected}`} style={{"--color":c[0]}}></div>
                })
            }
           </div>
        </div>
    );
})
 
export default ColorPanel;