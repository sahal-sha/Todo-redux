import React, { useState } from 'react'

const Show = () => {

  const[val,setVal]=useState("")
    const consoleText =(e)=>{
      setVal(e.target.value);
      console.log(e.target.value);
    }
  return (
    <div>
        <h1>onchange</h1>
    <input type='text'onChange={consoleText} />
    <h1>{val}</h1>
    </div>
  )
}

export default Show
