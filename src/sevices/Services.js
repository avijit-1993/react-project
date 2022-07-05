import React, { useState } from 'react'
import "./services.css"

import Data from "../data/allData"

const Services = () => {

    const [data, setData] = useState(Data);
    
  return (
    <>
    <div id='services'>
        <div className='container'>
            <div className='services-head text-center'>
                <h2 className='mb-3 text-white'>My Services</h2>
                <p className='mb-5'>Quverra tristique justo duis vitae diam neque nivamus aestan ateuene <br/>artinaelition finibus viverra nec lacus setlie suscipe tristique.</p>

                
            </div>
            <div className='s-box-container'>
                    {data.map((crrElm,index)=>{
                        return(
                            
                                <div className='s-box' key={index}>
                                    <div className='srv-img'><img src={crrElm.proImage}/></div>
                                    <div className='srv-name'><h4>{crrElm.serviceName}</h4></div>
                                    <div className='srv-con'><p>{crrElm.serviceContext}</p></div>
                                    
                                </div>
                            
                        )
                    })}
                </div>
        </div>
    </div>
    </>
  )
}

export default Services