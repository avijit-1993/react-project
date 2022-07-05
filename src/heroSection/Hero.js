import React, { useState } from 'react'
import "./hero.css"
import hegoBg from"../assets/images/herosection.jpg"

const Hero = (props) => {


  const[clr,setClr]= useState(false);


    let heroBg={ backgroundImage: `url(${hegoBg})` }
  return (
    <>
    <div id='hero-top'>
        <div className='container hero-con' style={heroBg}>
            
                <div className='hero-text'>
                <h4>Welcome to my</h4>
                <h1>Phoxel Studio</h1>
                <p>I love to pause the wild, happy and real moments of life, <br/>just to hear their stories untold.</p>
                <div className='hero-btn d-flex'>
                <a className="button-primary btn-1">My works</a>
                <a href="#" className="button-tersiyer btn-2">Contact me</a>
                </div>
                </div>
           
        </div>
    </div>
    </>
  )
}

export default Hero