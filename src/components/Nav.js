import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <h2>home</h2>
      </Link>
      <Link to="/dinner">
        <h2>dinner</h2>
      </Link>
      <Link to="vacation">
        <h2>vacation</h2>
      </Link>
    </nav>
  );
}

export default Nav;
