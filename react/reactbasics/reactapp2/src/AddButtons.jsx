import { useState } from "react"

export const UseStateExample = () =>{
    const [value, setValue]=useState(0)
     
    return(
        <>
        <h1>Use State Example</h1>
        <h1>{value}</h1>
      
          <button onClick={()=>{{setValue(value+1)}}}>Add+1</button>
          <button onClick={()=>{{setValue(value+2)}}}>Add+2</button>
          <button onClick={()=>{setValue(value+3)}}>Add+3</button>
          <button onClick={()=>{setValue(0)}}>Reset</button>

        </>
    )
}