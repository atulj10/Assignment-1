import React from 'react'
import { GiSkullCrossedBones } from "react-icons/gi";

const Form = ({ setOpen }) => {
  return (
    <div className='form-container' >
      <button onClick={() => setOpen(false)} style={{background:"transparent",border:"none",cursor:"pointer"}}><GiSkullCrossedBones /></button>
      <form>
        <input type='text' placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type='text' placeholder='Phone'/>
        <button className='form-register'>Register</button>
      </form>
    </div>
  )
}

export default Form
