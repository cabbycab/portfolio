import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header id="Header">
      <Link to="/" className="home-link">
        <h1>Danielle Koski</h1>
      </Link>
      <p>
        Software Engineer <br />
        San Francisco Bay Area <br />
        dkoski426@gmail.com <br />
        (510) 921-0641
      </p>
    </header>
  );
}

export default Header;
