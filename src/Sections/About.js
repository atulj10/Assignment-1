import React from 'react'
import stock from "../assets/logo512.png"

const About = () => {
  return (
    <>

      <div className='about-container'>
        <h1>About the Founder</h1>
        <div className='about-inside'>
          <div className='about-image'>
            <img className='stock-image' src={stock} alt='stock Image' />
          </div>
          <div className='about-content'>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
