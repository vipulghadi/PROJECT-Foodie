//this component is for to manage the quantity of food item in cart
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQty,increaseQty } from "../redux/CartSlice";
 
//val:count of perticular food item
// id: id for getting the index of food item data
function Counter({val,id}) {
   const dispatch=useDispatch()
  return <div className="d-flex gap-2 fs-6"> 
    <div className="dec px-2 border border-danger link" onClick={()=>{
         dispatch(decreaseQty({id:id}))
    }}>-</div>
    <div className="val px-2 border border-warning">{val}</div>
    <div className="inc px-2 border border-success link" onClick={()=>{
        dispatch(increaseQty({id:id}))
    }}>+</div>


  </div>;
}

export default Counter;
