import React from "react";
import { HeaderTextColor, ParagraphLink, ParagraphTextColor } from "utils";
import { ProjectsSlider } from "./slider";
import styled from "styled-components";
import "./styles.scss";

const ProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.projects.background};
  padding: 4rem;
  transition: all 0.5s ease-in-out;
  & > h1,
  & > p {
    color: ${(props) => props.theme.projects.color};
    text-align: center;
    width: 100%;
    margin-bottom: 0 !important;
    margin-top: 1rem;
  }
  & > p {
    font-size: 1.1rem;
  }
  & > a {
    margin: 0 auto;
    margin-top: 2rem;
    display: block;
    text-align: center;
    transition: all 0.5s ease-in-out;
    &:hover {
      opacity: 0.8;
      color: ${(props) => props.theme.projects.color};
    }
  }
  & > h1 {
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
  .projects-slider {
    .project-slider-item {
      h1 {
        color: ${(props) => props.theme.projects.color};
        text-align: center;
        width: 100%;
      }
    }
  }
`;
export const Projects = ({ projects }) => {
  const [phoneView, setPhoneView] = React.useState(false);
  return (
    <ProjectsContainer>
      <HeaderTextColor modifiers={["h1"]}>Projects</HeaderTextColor>

      <ParagraphTextColor>
        Here are some of my projects that I have worked on. 
        <br />
        Click on the image
        to see more details.
      </ParagraphTextColor>
      <ParagraphLink
        onClick={() => {
          setPhoneView(!phoneView);
        }}
      >
        {phoneView ? "View on Desktop" : "View on Mobile"}
      </ParagraphLink>
      <ProjectsSlider projects={projects} phoneView={phoneView} />
    </ProjectsContainer>
  );
};
