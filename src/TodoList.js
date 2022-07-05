import React, { useState } from 'react';

import { useDispatch, useSelector} from 'react-redux';

import { Increment, Decrement } from './action/index';

import ShowData from "./ShowData"

const TodoList = () => {

  

  const [item,setItem] = useState("");

  const selectorValue = useSelector((state)=> state.AddingList.list)
  
  const addClick = useDispatch();

  const passActn = (id)=>{

    addClick(Decrement(id))

  }



  return (
      <>

      <h3>hello Todo List</h3>

      <input type="text" value={item} placeholder="typ here.." onChange={(e)=> setItem(e.target.value)}/>
      
      <button onClick={()=> addClick(Increment(item),setItem(""))}>Add Items</button>

      {
        selectorValue.map((curr)=>{
          return(

            // <p key={curr.id} onClick={()=> addClick(mark())} className={line ? "linethr" : ""}>{curr.data} </p>
            <ShowData key={curr.id} data={curr.data} pass = {passActn} id = {curr.id}/>

          )
        })

      }
      
      </>
  );
};

export default TodoList;
