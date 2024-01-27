import React from "react";
function LoadingAnimation() {
  return (
    <div className="w-10- h-100 centered" style={{width:"100vw",height:"100vh"}}>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>{" "}
    </div>
  );
}

export default LoadingAnimation;
