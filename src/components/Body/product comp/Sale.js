import styles from './Sale.module.css';

const Sale = ({num})=>{
    return(
       <div className={styles.sale}>
             <div className={styles.saleContent}>
            <span>{num}%</span>
        </div>
       </div>
    );
}

export default Sale;