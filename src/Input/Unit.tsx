import { findBestContrast } from "@gdcorte/react-core-theme";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { SimpleInputInterface } from "../interface";
import { InputBoxCss } from "../styles";
import SimpleInput from "./Simple";

export const ContainerStyled = styled.div`
  ${InputBoxCss}
`;

export const UnitStyled = styled.p<{ disabled?: boolean }>`
  color: ${({ theme: { colors, background, fonts }, disabled }) =>
    disabled
      ? colors.primary.disabled
      : findBestContrast(background.base, fonts)};
  position: absolute;
  top: 0;
  right: 4px;
  margin: 0;
`;

export interface WithUnitInterface extends SimpleInputInterface {
  unitName: string;
}

const WithUnitInput: FunctionComponent<WithUnitInterface> = ({
  unitName,
  disabled,
  ...props
}) => {
  return (
    <ContainerStyled>
      <SimpleInput disabled={disabled} {...props} />
      <UnitStyled disabled={disabled}>{unitName}</UnitStyled>
    </ContainerStyled>
  );
};

export default WithUnitInput;
