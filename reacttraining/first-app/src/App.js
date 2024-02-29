
import './App.css';
import AdditionComponent from './add';
import FirstComponent from './firstcomponent';
import MultiplicationComponent from './mul';
import SecondComponent from './secondcomponent';
const person={
  name:"lavanya",
  age: 28,
  location:"hyd",
}

function App() {
  return (
    <div className="App">
      <h1>welcome to react</h1>
      <FirstComponent person={person} />
      <SecondComponent obj={person}/>
      <AdditionComponent x={1} y={3}/>
      <MultiplicationComponent  x={4} y={3}/>
    </div>
  );
}

export default App;
