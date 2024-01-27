//this component stores info about all categories of foods
import React from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../redux/ItemsSlice";
import Items from "../assets/foods";
function CategoryMenu() {
  //function to filter data by category
  const dispatch=useDispatch()
  function handleQuery(query){
    if(query!="all"){ let qItems=Items.filter((i)=>i.category.toLowerCase()==query);
      dispatch(setItems({qItems}))}
    else if(query=="all")
    { 
      dispatch(setItems({Items}))}
   
  }
  return (
    <div className="row  bg-white p-3 justify-content-between align-items-center px-sm-5 px-2 mt-5 ">
      <p className="fs-5 fw-bold mt-5">Find the best Food</p>
      <div className="btns d-flex gap-2  fs-6 flex-wrap">
        <button
          className=" px-3 border-0 rounded outline-none cat-effect"
          id="all" onClick={(e)=>{
            handleQuery(e.target.id)
          }}
        >
          All
        </button>
        <button
          className=" px-3 border-0 rounded outline-none cat-effect"
          id="lunch"  onClick={(e)=>{
            handleQuery(e.target.id)
          }}
        >
          Lunch
        </button>
        <button
          className=" px-3 border-0 rounded outline-none cat-effect"
          id="breakfast" onClick={(e)=>{
            handleQuery(e.target.id)
          }}
        >
          BreakFast
        </button>
        <button
          className=" px-3 border-0 rounded outline-none cat-effect"
          id="snack" onClick={(e)=>{
            handleQuery(e.target.id)
          }}
        >
          Snack
        </button>
        <button
          className=" px-3 border-0 rounded outline-none cat-effect"
          id="dinner" onClick={(e)=>{
            handleQuery(e.target.id)
          }}
        >
          Dinner
        </button>
      </div>
    </div>
  );
}

export default CategoryMenu;
