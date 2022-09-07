import { Link } from 'react-router-dom';
import styles from './ProdSale.module.css';


const ProdSale = ({product}) =>{
    
    return(
        <div className={`${styles.prodSale} ProductSale`}>
                <Link to={'/Products/'+product.id}>
                    <div className={styles.img}>
                        <img src={product.image} alt={product.name} />
                    </div>
                </Link>
                {product.sale?<span className={styles.discount}>{product.sale}%</span>:<i></i>}
                <div className={styles.price}>
                    <span >{Math.round(product.price*((100-product.sale)/100))} L.E</span>
                   {product.sale? <span><strike>{product.price}</strike>L.E</span>:null}
                </div>
        </div>
    );

}

export default ProdSale;