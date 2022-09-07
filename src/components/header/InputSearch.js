import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Input.module.css';

const InputSearch = props=>{

    const inputSearch= useRef();
    const [filteredData , setFilteredData]=useState([])
    const clear = ()=>{
        inputSearch.current.value=""
    }
    const filtering =(e)=>{
        let data =[], flag={}
        //rearange data
        var searchCont =[...props.prodNames.map(n=>n.split('/')[0]),
                         ...props.prodNames.map(n=>n.split('/')[1]),
                         ...props.prodNames.map(n=>n.split('/')[2])];

        if(e.target.value){
           try{
                searchCont.forEach((s,i)=>{
                    if(s.toLowerCase().includes(e.target.value.toLowerCase()))
                        !data.includes(s)&&data.push(s)
                    
                    if(data.length==10){
                        throw flag;
                    }
                })
           }catch (e){
                 if (e !== flag) throw e;
           }
        }

        setFilteredData(data)
    }
    const redirect = ()=>{
        inputSearch.current.value='';
        setFilteredData([])
    }
    
    return(
        <div className={styles.searchCont}>

            <input onChange={filtering} ref={inputSearch} className={styles.inputSearch} type="text" placeholder="Search.." />
            
            <span onClick={clear} className={styles.clear}>&#x2715;</span>
            
            <button className={styles.search} ><span>&#9906;</span></button>
            
            <div className={styles.suggest} >
                {filteredData.map((item,i) => {
                    return <span key={Math.random()} onClick={redirect}> 
                             <Link to={'/Products/Search/'+item} >{item} </Link>
                            </span>
                })}
            </div>
        </div>
    )
}

export default InputSearch;