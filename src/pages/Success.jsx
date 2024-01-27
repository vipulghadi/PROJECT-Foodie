import React from 'react'
import check from '../assets/check.png'
import { useNavigate } from 'react-router-dom'
function Success() {
    const navigate=useNavigate()
    function  navigateToHome(){
        navigate('/')
    }
    return ( <div style={{width:"100vw",height:"100vh"}} className='centered flex-column'> 
    <img src={check} alt="" width="20%" />
    <h3>Order Conformed...</h3>
    <div className='px-3 py-1 bg-warning rounded link mt-2' onClick={()=>{
        navigateToHome()
    }}>Explore more</div>
    </div>
    )
}

export default Success