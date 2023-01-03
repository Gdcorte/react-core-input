import { findBestContrast } from "@gdcorte/react-core-theme";
import styled from "styled-components";

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CaptionStyled = styled.p<{ checked: boolean }>`
  color: ${({ theme: { background, colors, fonts }, checked }) =>
    checked ? colors.primary.shade3 : findBestContrast(background.base, fonts)};
  margin-left: 6px;
`;
