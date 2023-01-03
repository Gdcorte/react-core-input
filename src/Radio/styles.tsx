import { findBestContrast } from "@gdcorte/react-core-theme";
import styled from "styled-components";

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CaptionStyled = styled.p<{ checked: boolean }>`
  color: ${({ theme: { colors, background, fonts }, checked }) =>
    checked ? colors.primary.base : findBestContrast(background.base, fonts)};
  padding-left: 6px;
`;

export const RadioContainer = styled.div<{ useRow?: boolean }>`
  display: flex;
  flex-direction: column;

  label {
    margin: 2px;
  }

  p {
    margin: 0;
  }

  ${({ useRow }) => {
    if (useRow) {
      return `
                flex-direction:row;

                label {
                    margin-right: 20px;
                }
            `;
    }
  }}
`;
