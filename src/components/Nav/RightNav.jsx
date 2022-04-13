import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffc0cb;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li>HOME</li>
      </Link>
      <Link to="/dinner">
        <li>BIRTHDAY DINNER</li>
      </Link>
      <Link to="/outfits">
        <li>BIRTHDAY OUTFITS</li>
      </Link>
      <Link to="/vacation">
        <li>VACATION LOOKS</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
