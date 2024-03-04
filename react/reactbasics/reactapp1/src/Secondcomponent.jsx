const Nestedcomponent = (props) =>{
    let x="5";
    let y=10;
    return(
      <h1>Nestedcomponent {x*y}  {props.a*props.b}</h1>  
    )
}
export const Secondcomponent = () =>{
    return(
        <>
        <Nestedcomponent a={10} b={20}/>
        <h1>secondcomponent</h1>
        </>
    )
}
export default Secondcomponent;