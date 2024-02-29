function SecondComponent(props){
    let {name, age, location} = props.obj;
    return(

        <div class="container1">
            <h2>Second Component {name} {age} {location}</h2>
        </div>
    )
}

export default SecondComponent