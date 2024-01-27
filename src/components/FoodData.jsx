//this component contains all the food items
import React from "react";
import store from "../redux/Store";
import NoItemFound from "./NoItemFound";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";
function FoodData() {
 //fetching food data from store
  const foods=useSelector((store)=>store.itemsQueries.items)

  return (
   
    <> {!foods.length?<NoItemFound/>:<div className="row d-flex  p-3 centered  gap-sm-3 px-sm-5 px-2 mt-sm-3 mt-4" style={{backgroundColor:"rgb(234, 236, 204)"}}>
            { foods.map((f)=>{
              return  <FoodCard data={f}/>
             })}
    </div>}


  
   


  </>)

}

export default FoodData;


