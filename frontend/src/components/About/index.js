import { Row, Col, Container } from "react-bootstrap";
import { HeaderTextColor, ParagraphTextColor } from "utils";
import "./styles.scss";
import styled from "styled-components";
import { profileImage } from "assets";

const AboutContainer = styled.div`
  background-color: ${(props) => props.theme.about.background};
  h1 {
    color: ${(props) => props.theme.about.color};
  }
`;

export const AboutComponent = () => {
  return (
    <AboutContainer className="about__component">
      <HeaderTextColor>About</HeaderTextColor>
      <hr/>
      <Container className="about__content">
        <Row>
          <Col sm={6} className="about__image">
            <img src={profileImage} alt="Me" />
          </Col>
          <Col sm={6} className="about__text">
            <ParagraphTextColor>
              Experience in development web application. The skills that make me
              efficient in my career are my organized work schedules, my
              initiative to learn new technologies, etc. These abilities help me
              develop my projects successfully
            </ParagraphTextColor>
          </Col>
        </Row>
      </Container>
    </AboutContainer>
  );
};
