import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodData from "../components/FoodData";
import Cart from "../components/Cart";
import store from "../redux/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart,setTotalCost,setTotalItem} from "../redux/CartSlice";
import { setItems } from "../redux/ItemsSlice";
import Items from '../assets/foods'
function Home() {
  //handling local storage
  const dispatch=useDispatch()
   useEffect(()=>{
      //adding items to cart from local storage
      if(localStorage.getItem("cart")!="[]"){
        
        let cartFromLS=localStorage.getItem("cart")
        let cartFromLS_=JSON.parse(cartFromLS)
        dispatch(setCart({cartFromLS_}))
      }
      if(localStorage.getItem("itemCount")!='0'){
        let item=localStorage.getItem("itemCount")
        let item_=Number(JSON.parse(item))
        dispatch(setTotalItem({item_}))
      }
      if(localStorage.getItem("totalCost")!='0'){
        let cost=localStorage.getItem("totalCost")
        let cost_=Number(JSON.parse(cost))
        dispatch(setTotalCost({cost_}))
      }
   },[])
    //when document loads first time ,we have to set localStorage configurations
    let showCart=useSelector((store)=>store.cartQueries.showCart)
    localStorage.getItem("cart")==null?localStorage.setItem("cart","[]"):null
    localStorage.getItem("itemCount")==null?localStorage.setItem("itemCount","0"):null
    localStorage.getItem("totalCost")==null?localStorage.setItem("totalCost","0"):null
//loading all data from api to store

// this effect is to get the data from API or other sources and keep it in our store
  useEffect(()=>{
        dispatch(setItems({Items}))
  },[])

  return <>
  <Navbar/>
  <CategoryMenu/>
  <FoodData/>
  {showCart? <Cart/>:null}
 
  </>;
}

export default Home;
