import React from "react";
import error_page from '../assets/error_page.jpg'

function Error() {
  return <div className=" centered" style={{width:"100vw",height:"100vh"}}> 
  <div className="centered">
  <img src={error_page} alt="" width="40%" />
  </div>
   
  </div>;
}

export default Error;
