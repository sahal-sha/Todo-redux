import React,{useState} from "react";

const Color =()=>{
    const [Val,setVal] =useState(0)

    const change =()=>{
        setVal(Val+1)
    }


    return(
        <div style={{backgroundColor:Val==2? "red":"green"}}>
            <h1>change</h1>

            <button onClick={change}>button</button>

            
        </div>
    )
}
export default Color