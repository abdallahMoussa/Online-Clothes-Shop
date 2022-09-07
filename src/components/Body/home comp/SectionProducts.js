import {useRef} from 'react';
import ProdSale from './ProdSale';
import styles from './SectionProducts.module.css';
import Products from '../../../DB/Products DB.json';


const SectionProducts =props=>{
    const container = useRef();
    const clickLeft = ()=>{
        container.current.append(container.current.children[0])    
    }
    const clickRight = ()=>{
        container.current.insertBefore(container.current.children[8], container.current.children[0])
    }
    
    return(
        <div className={styles.sectionProd}>
            <div onClick={clickLeft} className={`${styles.arrowLeft} ${styles.arrow}`}>
                <span> &#10148; </span>
            </div>
            <div className={`${styles.containt} `} >
                <div className={`${styles.fade}`}></div>
                    <div className={styles.cont} ref={container}>
                        
                       {Products.map(p=>{return <ProdSale product={p} key={p.id} />})}
                    </div>    
                <div className={`${styles.fade} ${styles.fadeRight}`}></div>

            </div>
            <div onClick={clickRight} className={`${styles.arrowRight} ${styles.arrow}`}>
            <span> &#10148; </span>
            </div>

        </div>
    );
}

export default SectionProducts;