import { useContext, useState } from "react";
import styles from "./Payment.module.css";
import {AppContext} from "../../../DB/Context";

const Payment = ({totalCount , totalPrice , allDone}) =>{

    const [city , setCity] = useState(false);
    const [fade , setFade] = useState(false);
    const context = useContext(AppContext);

    const changeCity =(e)=>{
        e.target.value == "Address.."?setCity(false):setCity(e.target.value)
    }
    const validity = (e)=>{
        e.target.value.length==11&&e.target.value[0]=='0'?setFade(true):setFade(false)
    }
    

    const location = [
        {"city":"Cairo","delivery":45,"locations":["Abdeen","Ain Shams","Amreya","Azbakeya","El Basatin","El Gamaliya","El Khalifa","Maadi"]},
        {"city":"Suez","delivery":60,"locations":["Arbaeen","Ganayen","Suez","Attaka","Faisal"]},
        {"city":"Alexandria","delivery":55,"locations":["Dekhela","Labban","Mansheya","Karmouz","Ataren"]},
        {"city":"Giza","delivery":40,"locations":["Dokki","Pyramids","Agouza","Giza","Atfeh"]},
        {"city":"Sharqia","delivery":50,"locations":["Faqous","Zagazig","Bilbeis","Hihya","Faqous"]},
        {"city":"Sohag","delivery":65,"locations":["Akhmim","El Balyana","El Kawtar","Girga","Saqultah"]}
    ]

    return(
        <div className={styles.payment}>
            <div className={styles.details}>
                <div className={styles.detail}>Count: <span>{totalCount} items</span> </div>
                <div className={styles.detail}>Total Price: <span>{totalPrice}  L.E</span></div>
                <div className={styles.detail}>Delivery: 
                  <span> {city?location.filter(loc=>loc.city==city)[0].delivery*(context.IsLogIn?.5:1) +" L.E":" ... "}</span>
                  {(!context.IsLogIn&&city)&&<div className={styles.saleDelivery}>
                       <span> SignUp to 50%</span>
                    </div>}
                </div>
                <div className={styles.detail}>Total Cost: <span>{city?totalPrice+location.filter(loc=>loc.city==city)[0].delivery*(context.IsLogIn?.5:1)  +" L.E":" ... "}  </span> </div>
            </div>
            <div className={styles.address}>
                <div className={styles.add}>
                    <select onChange={changeCity}>
                        <option>Address..</option>
                        <option>Cairo</option>
                        <option>Suez</option>
                        <option>Alexandria</option>
                        <option>Giza</option>
                        <option>Sharqia</option>
                        <option>Sohag</option>
                    </select>
                </div>
                <div className={styles.add}>
                    {city?<select>
                            {  location.filter(c=>c.city==city)[0].locations.map((loc)=>{
                                    return <option key={Math.random()}>{loc}</option>
                            }) 
                        }
                    </select>:<select disabled><option></option></select>}
                </div>
                <div className={styles.phone}>
                    {city&&<input onChange={validity} placeholder="phone number" type="number" />}
                </div>
          
                <button onClick={()=>allDone()} className={`${fade?styles.buy:styles.fade}`}>Buy Now</button>
               
            </div>
        </div>
    );
}

export default Payment; 