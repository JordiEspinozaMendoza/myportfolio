import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, primaryFont } from "utils";

export const HEADERS_MODIFIERS = {
  h1: () => `
        font-size: ${typeScale.header1};
        `,
  h2: () => `
        font-size: ${typeScale.header2};
        `,
  h3: () => `
        font-size: ${typeScale.header3};
        `,
  h4: () => `
        font-size: ${typeScale.header4};
        `,
  h5: () => `
        font-size: ${typeScale.header5};
        `,
  heroHeader: () => `
            font-size: ${typeScale.smallHeroHeader};
            `,
  primaryColor: (props) => `
  color: ${props.theme.primaryColor};
  font-weight: bold;
  letter-spacing: 0.1em;
  `,
};
export const HeroHeaderText = styled.h1`
  color: ${(props) => props.theme.headerHero.color};
  font-family: ${primaryFont};
  ${applyStyleModifiers(HEADERS_MODIFIERS)}
`;
export const ParagraphHeroHeader = styled.p`
  color: ${(props) => props.theme.headerHero.color};
  font-family: ${primaryFont};
  font-size: ${typeScale.header3};
  ${applyStyleModifiers(HEADERS_MODIFIERS)}
`;
export const HeaderTextColor = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-family: ${primaryFont};
  ${applyStyleModifiers(HEADERS_MODIFIERS)}
`;
export const ParagraphTextColor = styled.p`
  color: ${(props) => props.theme.textColor};
  font-family: ${primaryFont};
  ${applyStyleModifiers(HEADERS_MODIFIERS)}
`;
export const ParagraphLink = styled.a`
  color: ${(props) => props.theme.links.color};
  width: auto;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.links.hoverColor};
    cursor: pointer;
  }
  ${applyStyleModifiers(HEADERS_MODIFIERS)}
`;
