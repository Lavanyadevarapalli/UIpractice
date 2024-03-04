import { useState } from "react"

export const UsestateExample = () =>{
    const [value, setValue]=useState(0)
     function increment(){
        setValue(value+1)
     }
    return(
        <>
        <h1>Use State Example</h1>
        <h1>{value}</h1>
      
          <button onClick={increment}>Increment</button>
          <button onClick={()=>{if(value>0) {setValue(value-1)}}}>Decrement</button>
          <button onClick={()=>{setValue(0)}}>Reset</button>

        </>
    )
}