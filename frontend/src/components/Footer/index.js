import { Container } from "react-bootstrap";
import { ParagraphTextColor, primaryFont } from "utils";
import styled from "styled-components";

import "./styles.scss";
// ? Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footer.background};
  p {
    color: ${(props) => props.theme.footer.color};
    font-family: ${primaryFont};
  }
`;

export const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Container className="footer__content">
        <div className="reach__out__me">
          <ParagraphTextColor>Reach out to me!</ParagraphTextColor>
          <div className="social__icons">
            <AiFillGithub
              onClick={() =>
                window.open("https://github.com/JordiEspinozaMendoza", "_blank")
              }
            />
            <AiFillLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jordiespinoza/",
                  "_blank"
                )
              }
            />
            <AiFillTwitterCircle
              onClick={() =>
                window.open("https://twitter.com/itsme_jordi", "_blank")
              }
            />
            <a href="mailto:jordi8101@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
        <ParagraphTextColor>
          Made with <span className="with_love">❤️</span> by Jordi Espinoza
          &copy; {new Date().getFullYear()}
        </ParagraphTextColor>
      </Container>
    </FooterContainer>
  );
};
