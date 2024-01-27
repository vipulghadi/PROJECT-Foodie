
//this component is indivisual card for item
import React from "react";
import delete_icon from "../assets/delete_icon.png";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
//here data is the indivisual item data
function CartItem({ data }) {
  const dispatch = useDispatch();
  return (
    <div
      className="d-flex rounded-1  p-2 centered gap-2 w-100 mb-2 "
      style={{ backgroundColor: "#F8F8F1" }}
    >
      <img
        src={data.img}
        alt=""
        width="40px"
        height="40px"
        className="rounded-5 border"
      />

      <div className=" w-100 h-100 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className=" mb-0">{data.name}</p>
          <img
            src={delete_icon}
            alt=""
            width="15px"
            height="15px"
            className="link"
            onClick={() => {
              dispatch(removeFromCart({ id: data.id }));
            }}
          />
        </div>

        <div className="d-flex  p-1 justify-content-between">
          <p className=" mb-0 pb-0" style={{ fontSize: "12px" }}>
           
            {data.price}*{data.qty}={data.price * data.qty}₹
          </p>
          <Counter val={data.qty} id={data.id} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
