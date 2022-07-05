import React from 'react'

import "./info.css"

import signature from"../assets/images/signature-dark.svg"
import photographer from"../assets/images/about.jpg"
import dot from"../assets/images/dots.png"

const Info = () => {
  return (
    <>
    <div className='selfInfo-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Hello, I'm Martin Dan, a <br/>professional photographer <br/>based on New York</h3>
            <p>I love to pause the wild, happy and real moments of life, just to hear their stories untold. Viverra tristique usto duis vitae diam neque nivamus estan ateuene artines viverra nec setlie no curabit tristique.</p>
            <div className='self-points'>
              <p><span><i className="fas fa-check-circle"></i></span> Over 15 years of experience</p>
              <p><span><i className="fas fa-check-circle"></i></span> 200+ successfully executed projects</p>
              <p className='mb-0'><span><i className="fas fa-check-circle"></i></span> Exceptional work quality</p>
              <hr className='border-2'/>

              <div className='sig-box d-flex'>
                <div className='sig-img'>
                  <img src={signature} className='img-fluid' alt="#"/>
                </div>
                <div className='sig-text'>
                  <h4 className='mb-0'>Martin Dan</h4>
                  <p className='mb-0'>Founder of Photography</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='abt-img'>
              <img src={photographer} className='img-fluid' alt="#"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Info