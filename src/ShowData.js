import React, { useState } from 'react';

const ShowData = ({key,data,pass,id}) => {
    const [line,setLine] = useState(false);

    const mark =()=>{
      return setLine(!line);
    
    }

    const dlt = (id)=>{
        pass(id);
    }
  return (
    <>
    <p  key={key} ><span className={line ? "linethr" : ""} onClick={()=> mark()}>{data}</span> <span onClick={()=> dlt(id)}>X</span></p>
    </>
  )
}

export default ShowData