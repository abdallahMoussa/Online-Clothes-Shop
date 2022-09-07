import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';

const CartItem = ({product,removeFromCart}) =>{
    var count=0;
    const [showActions , setShowActions] = useState(true);
    const [fadeOutItem , setFadeOutItem] = useState(true);

    useEffect(()=>{setTimeout(()=>{
        setFadeOutItem(false)
    },200)},[])

    const mouseEnterHandler=()=>{
        setShowActions(false)
    }
    const mouseOutHandler = ()=>{
        setShowActions(true)
    }
    const deleteItem = ()=>{
        removeFromCart(product)        
    }
    

    return(
        <div
         className={`${styles.item} ${fadeOutItem&&styles.fadeItem}`}
         onMouseEnter={mouseEnterHandler}
         onMouseLeave={mouseOutHandler}
          >

            <div className={styles.img}>
               <Link to={'/Products/'+product.id}> <img src={product.image} alt={product.name} /></Link>
            </div>
            <div className={styles.name}>
                <h2>{product.name}</h2> <span>Brand: {product.brand}</span>
            </div>
            <div className={`${styles.details} ${!showActions&&styles.detailsFill}`} >
                
                {    
                    Object.keys(product.order).map(o=>{
                        count += product.order[o];
                        let size = o.split(',')[1];
                        let color = o.split(',')[0];
                        return <div key={o}>
                            <div className={styles.color} style={{"--color":color}}>
                                {size}
                            </div>
                            <span className={styles.count}>{product.order[o]}</span>
                    
                        </div>    
                    })
                }
                <div className={styles.quantity}>{count}</div>
                <div className={styles.total}>{count*product.price}</div>
            </div>
            <div className={`${styles.actions} ${showActions&&styles.fadeOut}`}>
                    <div onClick={deleteItem} className={styles.delete}>X</div>
            </div>
        </div>
    );
}

export default CartItem;