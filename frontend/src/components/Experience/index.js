import React from "react";
import "./styles.scss";
import { HeaderTextColor, ParagraphLink, ParagraphTextColor } from "utils";
import styled from "styled-components";
import { reducer } from "./reducer";
import { initialState } from "./constants";
import { actions } from "./actions";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.experience.background};
  h1 {
    margin-bottom: 2rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
  }
  h1,
  p,
  a {
    color: ${(props) => props.theme.experience.color};
  }
  a,
  p {
    font-size: 1rem;
  }
  a {
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  .experience__item {
    background-color: ${(props) => props.theme.experience.items.background};
    padding: 1rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    h1 {
      color: ${(props) => props.theme.experience.items.titleColor};
      font-weight: bold;
      letter-spacing: 0.1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Experience = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <ExperienceContainer>
      <HeaderTextColor modifiers={["h1"]}>Experience</HeaderTextColor>
      {state.experienceItems.map((item, index) => (
        <div className="experience__item">
          <div
            key={item.title}
            className={item.showInfo ? "experience__item--open" : ""}
          >
            <HeaderTextColor
              className="experience__item-title"
              modifiers={["h5"]}
            >
              {item.title}
              <ParagraphTextColor className="date">
                {item.date}
              </ParagraphTextColor>
            </HeaderTextColor>
            <ParagraphTextColor
              className="show__description"
              onClick={() =>
                dispatch({
                  type: item.showInfo
                    ? actions.HIDE_ITEM_INFO
                    : actions.SHOW_ITEM_INFO,
                  payload: index,
                })
              }
            >
              {item.showInfo ? "Hide" : "Show more"}
            </ParagraphTextColor>
            <ParagraphTextColor
              className="experience__description"
              modifiers={["p"]}
              hidden={!item.showInfo}
            >
              {item.description}
            </ParagraphTextColor>
          </div>
        </div>
      ))}
      <HeaderTextColor modifiers={["h1"]} className="mt-2">
        Education
      </HeaderTextColor>
      <div className="experience__item">
        <div>
          <HeaderTextColor
            className="experience__item-title"
            modifiers={["h5"]}
          >
            AZ-900: Microsoft Azure Fundamentals
            <ParagraphTextColor className="date">
              Approved in March 2021
            </ParagraphTextColor>
          </HeaderTextColor>

          <ParagraphLink
            href="https://tectijuanabc-my.sharepoint.com/:b:/g/personal/l19211633_tijuana_tecnm_mx/ETLRuYNHvAdAibCl_1s7tbgBtRFr3vXAT64yNKmMo2r7mg?e=1JhtNj"
            rel="noopener noreferrer"
            target="_blank"
          >
            View certificate
          </ParagraphLink>
        </div>
      </div>
    </ExperienceContainer>
  );
};
