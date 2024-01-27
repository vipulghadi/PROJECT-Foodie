//this component is mainly for displaying all the description about a single food item
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart} from "../redux/CartSlice";
function FoodCard({ data }) {
  //
    const dispatch=useDispatch()

    //logic to add item in cart
    function addInCart(data){
        dispatch(addToCart({data}))
    }
  return (
    <div className=" p-2 mt-3 mt-sm-0 bg-white  rounded col-sm-2 col-8 centered flex-column">
      <img
        src={data.img}
        alt=""
        width="100px"
        height="100px"
        className="p-1 mb-2 img-effect link"
      />
      <div className="w-100 rounded p-2 d-block mb-0" style={{backgroundColor:"#f5f0f0"}}>
        <div className="d-flex justify-content-between">
          <p className="fw-bold txt-md mb-1">
            {data.name.toUpperCase().slice(0, 18) + "..."}
          </p>
          <p className=" text-white p-1 d-inline rounded txt-sm px-1"  style={{backgroundColor:"rgb(101, 183, 65)"}}>
            {data.category}
          </p>
        </div>

        <p className="desc mb-1 link mt-0 " style={{ fontSize: "11px" }}>
          {String(data.desc).slice(0, 20) + "..."}
        </p>

        <div className="d-flex  justify-content-between mt-3 mb-0">
          <p
            className="bg-warning rounded txt-sm px-2 centered text-center"
            style={{ fontSize: "10px" }}
          >
            {data.price + "/-"}
          </p>
          <p
            className="px-2 py-1 rounded link cart-btn"
            style={{ fontSize: "12px"}} onClick={()=>{
               
                addInCart(data)
            }}
          >
            add to cart
          </p>
          <p
            className="bg-warning px-2 centered rounded txt-sm py-0"
            style={{ fontSize: "10px" }}
          >
            {data.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
