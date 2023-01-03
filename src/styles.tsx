import { findBestContrast } from "@gdcorte/react-core-theme";
import { css } from "styled-components";

export const InputCss = css`
  border: 2px solid ${({ theme: { colors } }) => colors.primary.base};
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;

  background-color: inherit;
  color: ${({ theme: { colors } }) => colors.primary.base};

  border-radius: 5px;

  display: flex;
  flex: 1;

  :focus-visible {
    outline: none;
    border: 2px dotted ${({ theme: { colors } }) => colors.primary.base};
  }

  :disabled {
    border: 2px double ${({ theme: { colors } }) => colors.primary.disabled};
    color: ${({ theme: { colors } }) => colors.primary.disabled};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputIconBoxCss = css`
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  right: 4px;
  top: 0;
  bottom: 0;
  vertical-align: middle;
  border-style: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${({ theme: { colors } }) => colors.primary.base};
    }
  }
`;

export const ErrorSpanCss = css`
  position: absolute;
  top: -10px;
  left: 0%;

  div:first-child {
    top: 4px;
    left: 6px;

    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-top: 10px solid ${({ theme: { alerts } }) => alerts.danger.base};
  }

  div:last-child {
    background-color: ${({ theme: { alerts } }) => alerts.danger.base};
    color: ${({ theme: { alerts, fonts } }) =>
      findBestContrast(alerts.danger.base, fonts)};
    padding: 2px;
    border: 2px solid ${({ theme: { alerts } }) => alerts.danger.base};
    border-radius: 8px;
    position: absolute;
    top: -20px;
    width: max-content;
  }
`;

export const InputBoxCss = css`
  width: inherit;
  position: relative;
  display: flex;
  flex: 1;
`;
