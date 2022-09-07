import styles from './ProductPage.module.css';
import Delivery from './Delivery'
import RateProduct from './RateProduct';
import ColorPanel from '../color_size comp/ColorPanel';
import SizePanel from '../color_size comp/SizePanel';
import Stars from './Stars';
import Sale from './Sale';
import ProductsDB from '../../../DB/Products DB.json'
import React,{useRef , useContext, useState, useEffect} from 'react';
import  {AppContext}  from '../../../DB/Context';
import { useParams } from 'react-router';
import Loader from '../loader comp/loader';

const ProductPage = props=>{

    const {ItemId} =useParams();    
    var product= ProductsDB.find((p)=>p.id==ItemId&&p)

    let context = useContext(AppContext) ;
    const addProduct = context.addToCart;
    const colorRef = useRef();
    const sizeRef = useRef();
    const [loading , setLoading] = useState(true);


    const addToCart = ()=>{
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
    }

    useEffect(()=>{setTimeout(()=>{setLoading(false)},1800)},[])

    return(
            <div className={styles.productPage} style={{'background':props.theme?'whitesmoke':'rgba(0,0,0,.4)'}}>
                {loading?<Loader />:
                    <>
                    {product?<>
                        <div className={styles.image}>
                            <div className={styles.productImage}>
                                <img src={product.image} alt='product img' />
                            </div>
                            <RateProduct stars={0}/>
                        
                        </div>
                    
                        <div className={styles.productInfo}>
                            
                            <h1 className={styles.productName}>
                                {product.name}
                            </h1>
                           {product.sale?<Sale num={product.sale} />:null}
                            <span className={styles.brand} >
                                Brand: {product.brand} 
                            </span>
            
                            <div className={styles.rate}>
                                
                            <Stars rate={product.rate}/>
                            </div>
                            
                            <span className={styles.price}>{product.price} L.E</span>
                            
                            <ColorPanel ref={colorRef} colors={product.color} init={product.color[0][0]} />
                            <SizePanel ref={sizeRef}  sizes={product.size} init={product.size[0][0]} />
                            
                            <div className={styles.description}>
                                <p>{product.description}</p>
                            </div>
                            <div className={styles.addToCart}>
                                <button  onClick={addToCart} className={`${styles.button}`}>Add To Cart</button>
                            </div>
                        </div>
            
                       </>:<h1 style={{"margin":"auto"}}>Item Not found</h1>
                       } 
                       
                        <Delivery  />
                </>}
            </div>   
        
    )

};
export default React.memo( ProductPage );