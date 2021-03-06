import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

function NavBar() {
  return (
    <Nav>
      <div className="logo">
        <Link to="/">BriDay</Link>
      </div>
      <Burger />
    </Nav>
  );
}

export default NavBar;
