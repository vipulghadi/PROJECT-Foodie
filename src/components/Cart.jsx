import React from "react";
import cart_logo from "../assets/cart_logo.png";
import close from "../assets/close.png";
import { useDispatch } from "react-redux";
import { toggleCart,makeCartEmpty } from "../redux/CartSlice";
import CartItem from "./CartItem";
import store from "../redux/Store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  //these are necessary action for getting details of cart from store
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartItems=useSelector((store)=>store.cartQueries.cart)
  const itemCount=useSelector((store)=>store.cartQueries.itemCount)
  const totalCost=useSelector((store)=>store.cartQueries.totalCost)
  
//function to check wheather use can checkout or not
  function canCheckOut(){
     
      if(itemCount>0){
        dispatch(makeCartEmpty({}))
        navigate('/success')
      }


  }
  

  return (
    <div className="row z-maxi" style={{zIndex:100}}>
      <div
        className="col-sm-3 col-12 bg-white h-100 position-fixed top-0 end-0 p-3  mx-auto  flex-column overflow-y-scroll z-maxi"
        style={{ height: "100vh" }}
      >
        <div className="centered   mt-2 gap-1">
          <img src={cart_logo} alt="" width="30px" /> My Cart
        </div>
      <div className="p-1 mt-2 mb-2 ">
        { !cartItems?null:cartItems.map((i)=>{
           return <CartItem data={i}/>
        }) }
        
      </div>
      <div className="bill  p-0 d-block">
          <p className="mb-0 mr-2">totalItems:{itemCount}</p>
          <p className="mr-2">Total Cost:{totalCost}</p>
          <div className=" w-100 px-2 py-1 rounded text-center link" style={{backgroundColor:"rgb(101, 183, 65)"}} onClick={()=>{
            canCheckOut()
          }}>checkout</div>
      </div>
      
        <div className=" close position-absolute top-0 end-0 p-4 link">
          <img src={close} alt="" width="20px"  onClick={()=>{
            dispatch(toggleCart())
          }}/>
        </div>
      </div>
    </div>
  );
}

export default Cart;
