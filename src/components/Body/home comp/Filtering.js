import { useEffect } from "react";
import styles from "./Filtering.module.css";

const Filtering = props =>{

    let lists = document.getElementsByClassName('ul')
    let arrows =document.getElementsByClassName('arrow')
    useEffect(()=>{ 
        for(let i =0 ; i<3 ; i++){
            lists[i].style.height= lists[i].getAttribute('alt')+'px';
            arrows[i].style.cssText="transform: rotate(-90deg)";
        }
     } , [])

    const openMenu = (index)=>{
        let list = lists[index];
        let arrow = arrows[index];
        
        if(list.style.height == '' ){   
            list.style.height= list.getAttribute('alt')+'px';
            arrow.style.cssText="transform: rotate(-90deg)";
        }else{
            list.style.height='';
            arrow.style.cssText="transform: rotate(90deg)"
        }
    }

    const filtering=()=>{
        let checks =document.getElementsByTagName("input");
        // 1:4 for category , 5:7 for sale , 8:12 for price
        let category =[] , discount=[] , rang=[] 
      
        Array.from(checks).map((ch,i)=>{
            if(i>7){
                ch.checked&&rang.push(ch.value)
            }else if(i>4){
                ch.checked&&discount.push(ch.value)
            }else{
                ch.checked&&category.push(ch.value)
            }
        })
       
        let checked = [category,discount,rang];
        props.filter(checked)
    }
    
    return(<>
            <section className={styles.filter}>
                <div className={styles.filterCont}>
                   <div className={styles.filterSection}>
                        <span onClick={()=>{openMenu(0)}}>Category <code className="arrow"> &#62; </code></span>
                        <ul id="category" alt="130" className="ul">
                            <li><input name="category" type="checkbox" value="men"/> Men</li>
                            <li><input name="category" type="checkbox" value="women" /> Women</li>
                            <li><input name="category" type="checkbox" value="kids" /> Kids</li>
                            <li><input name="category" type="checkbox" value="all" /> All</li>
                        </ul>
                   </div>
                    
                    <div className={styles.filterSection}>
                        <span onClick={()=>{openMenu(1)}}>Items In Sale <code className="arrow"> &#62; </code></span>
                        <ul id="sale" alt="105" className="ul">
                            <li><input name="discount" type="checkbox" value="withDiscount"/> In Sale</li>
                            <li><input name="discount" type="checkbox" value="withoutDiscount" /> Outof Sale</li>
                            <li><input name="discount" type="checkbox" value="all"  /> All</li>
                        </ul>
                    </div>

                    <div className={styles.filterSection}>
                        <span onClick={()=>{openMenu(2)}}>Price Range <code className="arrow"> &#62; </code></span>
                        <ul id="rang" alt="130" className="ul">
                            <li><input name="rang" type="checkbox" value="0-350"/> 0 : 350 <a>L.E</a></li>
                            <li><input name="rang" type="checkbox" value="350-600" /> 350 : 600 <a>L.E</a></li>
                            <li><input name="rang" type="checkbox" value="600-9999" />  600 : --  <a>L.E</a></li>
                            <li><input name="rang" type="checkbox" value="0-9999" /> All <a>L.E</a></li>
                        </ul>
                    </div>
                    <button onClick={filtering} className={styles.btFilter}>Filter</button>
                </div>
            </section>
        </>);
}

export default Filtering;