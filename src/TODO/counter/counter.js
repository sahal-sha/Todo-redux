import React,{useReducer} from "react";


const initialState =0;
const Counter =(state,action)=>{


    switch(action){
        case "increment":
            return state +1
            case "decrement":
                return state -1
                case "reset":
                    return initialState
                    case "default":
                        return state
    }


}


const Count =()=>{
    const [count,dispatch] = useReducer(Counter,initialState)
    return(
        <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
            <h1>count : {count}</h1>

            <button onClick={()=>dispatch("increment")}>increment</button>
            <button onClick={()=>dispatch("decrement")}>decrement</button>
            <button onClick={()=>dispatch("reset")}>reset</button>
        </div>
    )

   

}
export default Count;