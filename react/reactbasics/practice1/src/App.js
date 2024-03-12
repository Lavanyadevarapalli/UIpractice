import logo from './logo.svg';
import './App.css';
import Firstcomponent, { Secondcomponent } from './Firstcomponent';

function App() {
  let x=10;
  let y=20;
  return (
    <div className="App">
     <h1>welcome to react</h1>
     <h2>{x}</h2>
     <Firstcomponent a={x} b={y}/>
  <updateGrade/>
    </div>
  );
}

export default App;
