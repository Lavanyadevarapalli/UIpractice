import './App.css';
import {Routes} from 'react-router-dom';
import Laptops from './Laptops';
import Mobiles from './Mobiles';
import Smartwatches from './Smartwatches';
import Tablets from './Tablets';
import Tvs from './Tvs';
import Navbar from './Navbar';
import { Home } from './Home';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Navbar/>        
        <Routes>
        <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path="/mobiles" element={<Mobiles/>}/>
          <Route path="/tablets" element={<Tablets/>}/>
          <Route path="/tvs" element={<Tvs/>}/>
          <Route path="/smartwatches" element={<Smartwatches/>}/>
          <Route path="/laptops" element={<Laptops/>}/>
          </Routes>
          
          </>
  );
}

export default App;

