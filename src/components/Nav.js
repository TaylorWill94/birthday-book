import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <h2>HOME</h2>
      </Link>
      <Link to="/dinner">
        <h2>DINNER</h2>
      </Link>
      <Link to="vacation">
        <h2>VACATION</h2>
      </Link>
    </nav>
  );
}

export default Nav;
