
export const Thirdcomponent = (props) =>{
    return(
      <h1>Third component {props.x+props.y}{props.x-props.y} {props.x*props.y}{props.x/props.y}{props.x%props.y}</h1>  
    )
}
export const Secondcomponent = () =>{
    return(
        <>
         <h1>Secondcomponent</h1> 
        <Thirdcomponent x={15} y={56}/>
        
     </>
    )
}