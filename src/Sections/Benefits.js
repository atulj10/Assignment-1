import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className='features-container'>
      <div className='heading'>
        <h1><span style={{color:"red",fontSize:7+"rem",fontFamily:"Poppins"}}>But</span> Why?</h1>
      </div>
      <div>
        <div className='row'>
          <div className='item'>
            <FaCheckCircle  size={70}/>
            The Reason or the feature to be displayed

          </div>
          <div className='item'>
            <FaCheckCircle  size={70}/>
            The Reason or the feature to be displayed
          </div>
          <div className='item'>
            <FaCheckCircle  size={70}/>
            The Reason or the feature to be displayed
          </div>
        </div>
        <div className='row'>
          <div className='item'>
            <FaCheckCircle  size={70}/>
            The Reason or the feature to be displayed
          </div>
          <div className='item'>
            <FaCheckCircle size={70}/>
            The Reason or the feature to be displayed
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
