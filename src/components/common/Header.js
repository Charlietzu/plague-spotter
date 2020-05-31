import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import AboutModal from "./AboutModal";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/plague-spotter">PREMAP</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setModalShow(true)}>About</Nav.Link>
        </Nav>
      </Navbar>

      <AboutModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
