import React from "react";
import { StyledNavbar as NavBar } from "./styled";
import { Container, NavbarBrand } from "react-bootstrap";
export const NavigationBar = () => {
  return (
    <NavBar expand="lg" collapseOnSelect>
      <Container>
        <NavbarBrand>
          <span>{"{Jordi}"}</span>
        </NavbarBrand>
      </Container>
    </NavBar>
  );
};
