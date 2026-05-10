import { Link } from "react-router-dom";
import './header.css';


function Header() {
  return (
    <header>
      <Link to="/" className="logo">Cine Agora</Link>
      <Link to="/favoritos" className="favoritos">Favoritos</Link>
    </header>
  );
}

export default Header;