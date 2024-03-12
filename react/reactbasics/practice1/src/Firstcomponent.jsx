import React, { useState } from "react";

const Secondcomponent = (props) => {
  const [grade, setGrade] = useState("A");
  const updateGrade = () => {
    setGrade("B");
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Software company name: {props.name}</h1>
      <h2>the grade: {grade}</h2>
      <button onClick={updateGrade}>Update Grade</button>
    </>
  );
}
export const Firstcomponent = (props) => {
    let name = 'Rudrasa';
    return (
      <>
        <h1>{props.a + props.b}  {props.a - props.b}     {props.a * props.b}</h1>
        <Secondcomponent name={name}/>
      </>
    );
  }
export default Firstcomponent;