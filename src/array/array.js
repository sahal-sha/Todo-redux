
import React from "react";

const Array =()=>{

 const arr =[{ name:"sahal",age:23},
             {name:"nusaif",age:22},
             {name:"salim",age:22},
];

 return(
    <div>
        <center>
        <h1>table</h1>
        

            <table border={1}>


                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
                {arr.map((item)=>(
                    <tr>
                   <td> {item.name}</td>
                   <td>{item.age}</td>
                   </tr>
                   
                   
                ))}
            </table>
            </center>


        



    </div>
)
}

export default Array;

