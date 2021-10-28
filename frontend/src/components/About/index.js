import { Row, Col, Container } from "react-bootstrap";
import { HeaderTextColor, ParagraphTextColor } from "utils";
import "./styles.scss";
import styled from "styled-components";
import { profileImage } from "assets";
import { Techs } from "./techs";
const AboutContainer = styled.div`
  background-color: ${(props) => props.theme.about.background};
  h1 {
    color: ${(props) => props.theme.about.color};
    width: 100%;
    .name {
      color: ${(props) => props.theme.tertiaryColor};
      font-weight: bold;
      letter-spacing: 0.5px;
    }
  }
`;

export const AboutComponent = () => {
  return (
    <AboutContainer className="about__component">
      <HeaderTextColor>About</HeaderTextColor>
      <hr />
      <Container className="about__content">
        <Row>
          <Col lg={6} className="about__image">
            <img src={profileImage} alt="Me" />
          </Col>
          <Col lg={6} className="about__text">
            <HeaderTextColor>
              Hello, I'm <span className="name">Jordi</span> .
            </HeaderTextColor>
            <ParagraphTextColor>
              Experience in web applications development. The skills that make
              me efficient in my career are my organized work schedules, my
              initiative to learn new technologies, etc. These abilities help me
              develop my projects successfully
              <br />
              <br />
              Here are some of the technologies I use:
              <br />
              <br />
              <div className="about__technologies">
                <Techs />
              </div>
            </ParagraphTextColor>
          </Col>
        </Row>
      </Container>
    </AboutContainer>
  );
};
