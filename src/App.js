import React,{ useEffect, useState , context } from 'react';
import {Routes , Route  } from 'react-router-dom';

import './App.css';
import Products from './components/Body/product comp/Products';
import Footer from './components/Footer/Footer';
import Nav from './components/header/Nav';
import Slider from './components/header/Slider';
import Cart from './components/Body/cart comp/Cart';
import ProductPage from './components/Body/product comp/ProductPage';
import ProductDB from './DB/Products DB.json';
import OutCover from './components/Body/auth comp/OutCover';
import Home from './components/Body/home comp/Home';
import {AppContext} from './DB/Context'
import Completed from './components/Body/alert comp/Completed';
import CompleteAlert from './components/Body/alert comp/CompleteAlert';

function App() {

  const [CartList ,setCartList]= useState([]);
  const [Length ,setLength]= useState(0);
  const [enableCover , setEnableCover] = useState(false)
  const [prodNames , setProdNames] = useState([])
  const [IsLogIn , setLogIn] = useState(false)
  const [LightTheme , setTheme] = useState(true);

  useEffect(()=>{
    setProdNames( prev =>
        ProductDB.map(p => `${p.name}/${p.type}/${p.brand}`) 
      )
      localStorage.getItem('LightTheme')&&(localStorage.getItem('LightTheme')=='true'?setTheme(true):setTheme(false))
    },[]);

  
  
  const setCover = type => setEnableCover(type);

  const removeFromCart = product =>{

    if(product=='*'){
      setCartList([]);
      setLength(0);
      setTimeout(() => {
        window.location.href="/"
      }, 2000);
    }else{
      let count;
      let temp = CartList.filter(p=>{
        if(p.id!=product.id){
          return p;
        }else{
          count = Length-product.count;
        }
      })
      CompleteAlert("Item Removed")
      setCartList(temp);
      setLength(count)
    }
  }

  const addToCart = product=>{
     
      if(CartList.length==0){
        
        setCartList(prev=>[product]);
      }else{
        let exist= false;
       var temp =CartList.map(item=>{
          if(item.id==product.id ){
            item.color.push(product.color[0])
            item.size.push(product.size[0])
                item.count++;
                exist=true;
              }
              return item
        })
        exist?setCartList(prev=>temp):setCartList(prev=>[...temp,product])    
      }
      setLength(Length+1)
      CompleteAlert("Item Added")

  };
  const changeTheme = () =>{
    localStorage.setItem('LightTheme',!LightTheme)
    setTheme(!LightTheme)};
  const login = value => setLogIn(value);

  return (
    <AppContext.Provider value={{login , IsLogIn ,addToCart , LightTheme , changeTheme}}>
      
      
      <div className="App" style={{
        "--main-bakground":LightTheme?'gainsboro':'#002938',
        "--nd-bakground":LightTheme?'whitesmoke':'#12635f',
        "--font-color":!LightTheme?'gainsboro':'#002938'}} >

        <Nav prodNames={prodNames} len={Length} showCover={setCover}  />
        <Completed />
        <Routes >

          <Route path='/Products' element={<Products  products={ProductDB}  />} />
          <Route path='/Products/Search/:match' element={<Products  products={ProductDB}  />} />

          <Route path="/Cart" element={<Cart removeFromCart={removeFromCart} products={CartList} />} />

          <Route path='/Products/:ItemId' element={<ProductPage theme={LightTheme} />} />

          <Route path='*' exact element={<Home />} />

        </Routes>

        
          {enableCover&&<OutCover enable={enableCover} type={enableCover==1?"SignUp":"LogIn"} showCover={setCover} />}
      
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
