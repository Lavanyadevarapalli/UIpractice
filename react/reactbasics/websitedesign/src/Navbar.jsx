import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/Home">Home</Link></li>
        <li><Link to="/mobiles">Mobiles</Link></li>
        <li><Link to="/tablets">Tablets</Link></li>
        <li><Link to="/tvs">TVs</Link></li>
        <li><Link to="/smartwatches">Smartwatches</Link></li>
        <li><Link to="/laptops">Laptops</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

