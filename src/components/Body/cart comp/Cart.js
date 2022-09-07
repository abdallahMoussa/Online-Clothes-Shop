import styles from './Cart.module.css';
import CartItem from './CartItem';
import { memo, useState } from 'react';
import Payment from "./Payment"
import CompleteAlert from '../alert comp/CompleteAlert';

const Cart = ({products,removeFromCart}) =>{

    var temp =[], totalCount =0 , totalPrice=0;
    if(products.length){
         temp = products.map(p=>{
            let concat = p.color.map((c,i)=>[c,p.size[i]])
            totalCount +=p.count;
            totalPrice += p.count*p.price;
            p.order={};
            concat.map(con=>p.order[con]=(p.order[con]||0)+1);
            return p;
        })      
    }
    const [Cart] = useState(temp);
    const BuyingComplete = ()=>{
        CompleteAlert("Wait Order in 24 hours")
        removeFromCart('*');
    }   
    return(
        <div className={styles.cart}>
            <div className={styles.items}>
                {products.length?
                    Cart.map(p=> <CartItem key={p.id} removeFromCart={removeFromCart} product={p} />):
                <h1>Cart is Empty</h1>}
            </div>
           {products.length? <Payment allDone={BuyingComplete}  totalCount={totalCount} totalPrice={totalPrice} />:null}
        </div>
    );
}

export default memo(Cart);