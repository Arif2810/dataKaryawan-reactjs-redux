import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="#">Company employee data</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>             
            </Nav>
            <NavbarText>Admin</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
