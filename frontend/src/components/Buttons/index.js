import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { typeScale, primaryFont } from "utils";

export const BUTTON_MODIFIERS = {
  small: () => `
      padding: 6px 10px;
      font-size: ${typeScale.helperText};
      `,
  large: () => `
      padding: 12px 20px;
      font-size: ${typeScale.smallParagraph};
  `,
};
const Button = styled.button`
  border: none;
  padding: 12px 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 110px;
  font-family: ${primaryFont};
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  border-radius: 2px;
  transition: all 0.2s linear;
`;
export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.primary.background};
  color: ${(props) => props.theme.buttons.primary.color};

  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.primary.hover.background};
    color: ${(props) => props.theme.buttons.primary.hover.color};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.secondary.background};
  color: ${(props) => props.theme.buttons.secondary.color};

  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.secondary.hover.background};
    color: ${(props) => props.theme.buttons.secondary.hover.color};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.tertiary.background};
  color: ${(props) => props.theme.buttons.tertiary.color};

  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.tertiary.hover.background};
    color: ${(props) => props.theme.buttons.tertiary.hover.color};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
