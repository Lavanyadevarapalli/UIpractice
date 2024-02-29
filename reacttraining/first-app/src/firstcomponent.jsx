let a=10;
const ArrowFunctionComp = () =>{
    return(
        <p>This is Arrow Function in First Component</p>
    )
}

function FirstComponent(props){

    return(
        <div class="container">
            <h1>FirstComponent value is {a}{props.person.name} {props.person.age}  {props.person.location} </h1>
            <ArrowFunctionComp />
        </div>
    )
}

export default FirstComponent;
