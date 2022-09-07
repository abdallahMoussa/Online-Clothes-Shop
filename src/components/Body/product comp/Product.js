import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../DB/Context';
import ColorPanel from '../color_size comp/ColorPanel';
import styles from './Product.module.css'
import SizePanel from '../color_size comp/SizePanel';


const Product = props =>{
    const {product} = props;
    const [fade ,setFade ] = useState(true);

    const colorRef = useRef();
    const sizeRef = useRef();
    const namePrice = useRef();
    const alertMessage = useRef();
    const details =useRef();

    let context = useContext(AppContext);
    const addProduct = context.addToCart;

    const mouseInHandler=()=>{
        details.current.style.cssText="opacity:1; margin-top: -10px";
        namePrice.current.style.cssText="margin-top:-60px";
    }
    const mouseOutHandler=()=>{
       details.current.style.cssText="opacity:0; margin-top: -15px"; 
       namePrice.current.style.cssText=" margin-top:5px";
       
    }
    const addToCart=()=>{
        //  validity..
        if(sizeRef.current.size){
            if(colorRef.current.color){
                addProduct({
                    "id":product.id,
                    "name":product.name,
                    "price":product.price,
                    "image":product.image,
                    "size":[sizeRef.current.size],
                    "color":[colorRef.current.color],
                    "brand":product.brand,
                    "count":1
                })
               
                alertMessage.current.classList=styles.alertDone;
                alertMessage.current.innerHTML="&#x02713;"

            }else{
                showError("Select Color")
            }

        }else{
            showError("Select Size")
        }
    }
    const hideError= ()=>{
        alertMessage.current.classList="";
        alertMessage.current.textContent="";
    }
    const showError=(errorText)=>{
        alertMessage.current.classList=styles.alert;
        alertMessage.current.textContent=errorText;
        setTimeout(hideError,2000)
    }
    useEffect(()=>{setTimeout(()=>setFade(false),500)},[])
    
    return<>
            <div
            key={product.id}
            className={`${fade?styles.fade:undefined} ${styles.product}`}
            onMouseEnter={mouseInHandler}
            onMouseLeave={mouseOutHandler}>
                
                <div className={styles.productBg}>
                    <div className={styles.cardBg}>
                        <div ref={alertMessage}></div>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productImg}>
                     <Link to={'/Products/'+product.id}><img alt={product.name} src={product.image} /></Link>
                    </div>
                    <div className={styles.namePrice} ref={namePrice}>
                        <Link to={'/Products/'+product.id}>
                            <h2>{product.name}</h2>
                        </Link>
                        {
                            product.sale?<h4>
                                            {Math.round(product.price*((100-product.sale)/100))} L.E &nbsp;&nbsp;
                                                <span>{product.price} L.E</span>
                                        </h4>:
                                        <h3>{product.price} L.E</h3>

                        }                       
                    </div>
                    <div className={styles.details} ref={details} >
                        <SizePanel ref={sizeRef} sizes={product.size} init={null} />
                        <ColorPanel ref={colorRef} colors={product.color} init={null} />
                    </div>
                    <div  className={styles.addToCart} >
                        <button onClick={addToCart}>Add To Cart</button> 
                    </div>
                </div>
            </div>
       
            </>;
}
export default memo(Product);