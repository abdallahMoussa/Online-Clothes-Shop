import React, { useImperativeHandle, useState } from 'react';
import styles from './SizePanel.module.css';


const SizePanel = React.forwardRef( (props,ref)=>{

    const {sizes , init} = props;
    
    const [selected , setSelect] =useState(init);

    const selectSize=(e)=>{
        setSelect(e.target.getAttribute('alt'))
    }

    useImperativeHandle(ref,()=>{
        return{
            size:selected,
        }
    })
    return(
        <div className={styles.sizes}>
            <div className={styles.label}>
                <span>Size: </span>
            </div>
           <div className={styles.sizePanel}>
           {
                sizes.map(s=>{
                    return <div  alt={s[0]} onClick={selectSize} key={s} className={`${styles.size} ${selected==s[0]&&styles.selected}` }>{s[0]}</div>
                })
            }
           </div>
        </div>
    );
}
 ) 
export default SizePanel;