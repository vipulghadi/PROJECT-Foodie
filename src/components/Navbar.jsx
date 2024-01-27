import React from "react";
import cart_logo from "../assets/cart_logo.png";
import { useDispatch } from "react-redux";
import { toggleCart } from "../redux/CartSlice";
import store from "../redux/Store";
import { useState } from "react";
import Items from "../assets/foods";
import { setItems } from "../redux/ItemsSlice";
function Navbar() {
    const dispatch=useDispatch()
    const [query,setQuery]=useState("")
//search query in store
//note qItems name is mendatory
    function queryResult(){
     
      if(query){
       let qItems= Items.filter((i)=>i.name.toLowerCase().match(query.toLowerCase()))
        dispatch(setItems({qItems}))
      }
      else{
        dispatch(setItems({Items}))
      }
  
    }

  return (
    <div className="row d-flex p-3 justify-content-between align-items-center px-sm-5 px-2 position-fixed top-0  z-max " style={{backgroundColor:"#F8F1C3",width:"100vw"}}>
      <div className="col-sm-6 col-2  d-flex gap-2">
        <img src="../../public/dish.png" alt="" width="40px" className="mr-2" />
        <h4 className="ml-4 d-sm-block d-none text-danger ">Foodie</h4>
      </div>
      <div className="col-sm-6 col-10 d-flex gap-3">
        <div className="w-100 d-flex">
          <input type="text" className="w-100 p-2" placeholder="Idli-sambhar" onChange={(e)=>{
         setQuery(e.target.value)
          }} />
          <button className="btn btn-warning rounded-0" onClick={()=>{
            queryResult()
          }}>search</button>
        </div>

        <img src={cart_logo} alt="" className=" link" width="30px" onClick={()=>{
            dispatch(toggleCart())
        }} />
      </div>
    </div>
  );
}

export default Navbar;
