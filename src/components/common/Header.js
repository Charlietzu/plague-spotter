import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Premap</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Map</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
