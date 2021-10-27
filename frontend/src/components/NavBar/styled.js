import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { breakpoints, primaryFont } from "utils";

export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.navbar.backgroundColor};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  font-family: ${primaryFont};
  font-size: 0.8rem;
  z-index: 1043;
  i,
  a {
    color: ${(props) => props.theme.navbar.color};
  }
  i:hover,
  a:hover {
    color: ${(props) => props.theme.navbar.hover.color};
  }
  .navbar-brand {
    color: ${(props) => props.theme.navbar.color};
    transition: all 0.3s ease-in-out;
    letter-spacing: 0.3rem;
    font-size: 1.3rem;
    font-weight: bold;
    &:hover {
      color: ${(props) => props.theme.navbar.hover.color};
      cursor: pointer;
    }
  }
`;
