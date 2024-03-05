
import { UseStateExample } from './AddButtons';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Firstcomponent from './Component1';
import { Secondcomponent, Thirdcomponent } from './component2';



function App() {
  return (
    <div className="App">
     <h1>welcome to react</h1>
     <Firstcomponent/>
     <Header/>
<Body/>
<Footer/>
<UseStateExample/>    
    
     
    </div>
  );
}

export default App;
