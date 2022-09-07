import styles from './Products.module.css';
import Product from './Product';
import { memo, useEffect, useState } from 'react';
import Filtering from "../home comp/Filtering"
import { useParams } from 'react-router';
import Loader from '../loader comp/loader'


const Products = ({products ,remove }) =>{

    const [productList, setList] = useState(products);
    const [searchedProduct, setSearchedProducts] = useState();
    const [loading , setLoading]= useState(true);

    let match = useParams();
    match =Object.values(match)[0]
    const filterItems=(items)=>{
        
        if(Object.keys(match).length)
            products=searchedProduct
      
        if(items[0].length){
            if(!items[0].includes('all'))
                products= products.filter(p=>items[0].includes(p.category)&&p)
            }

        if(items[1].length==1){
            if(items[1][0] =='withDiscount'){
                products = products.filter(p=>p.sale>0)
            }else if(items[1][0] =='withoutDiscount'){
                products = products.filter(p=>p.sale==0)
            }
        }
        
        if(items[2].length){
            let temp=[];
            items[2].map(i=>{
                let min = i.split('-')[0],
                    max = i.split('-')[1];    
                temp.push(...products.filter(p=>{
                    let price = p.price*((100-p.sale)/100)
                        if(price>min&&price<=max){
                            return p
                        }
                }))
            })
            products = temp;
        }
        setList(products)
    }

    const search =(pattern)=>{
        products = products.filter(p=>p.name.includes(pattern)||p.type.includes(pattern)||p.brand.includes(pattern)&&p);
        setSearchedProducts(products) 
        setList(products)
    }
  
    useEffect(()=>{
        window.location.href.toLocaleLowerCase().includes('/search/')&&search(match);
        setTimeout(()=>{setLoading(false)},2000)
    },[match])
    
    return( 

        <div className={styles.products}>
            {loading? <Loader />:
                <>
                    <Filtering filter={filterItems} />
                    <div className={styles.productItems}>
                            { productList.map(p => <Product key={p.id} product={p} removeProduct={remove} /> )}
                    </div>
                        
                </>
            }
        </div>

    );
}
export default memo(Products);