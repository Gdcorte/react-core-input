import { SymbolsReplace } from "@gdcorte/react-core-icons";
import { findBestContrast } from "@gdcorte/react-core-theme";
import { FunctionComponent, ReactNode, useState } from "react";
import styled from "styled-components";
import { SimpleInputInterface, ToggleInputEvent } from "../interface";
import { InputBoxCss, InputIconBoxCss } from "../styles";
import SimpleInput from "./Simple";

const ContainerStyled = styled.div`
  ${InputBoxCss}
`;

const UnitStyled = styled.p<{ disabled?: boolean }>`
  color: ${({ theme: { colors, background, fonts }, disabled }) =>
    disabled
      ? colors.primary.disabled
      : findBestContrast(background.base, fonts)};
  position: absolute;
  top: 0;
  right: 18px;
  margin: 0;
`;

const ToggleIconStyled = styled.div`
  ${InputIconBoxCss}

  svg {
    width: 10px;
    height: 10px;
  }
`;

export interface ToggleProps extends SimpleInputInterface {
  toggle: {
    first: ReactNode;
    second: ReactNode;
  };
  onToggleCallback?: (event?: ToggleInputEvent) => {};
}

const Toggle: FunctionComponent<ToggleProps> = ({
  toggle,
  disabled,
  onToggleCallback,
  ...props
}) => {
  const [currentUnit, setcurrentUnit] = useState<ReactNode>(toggle.first);

  function switchUnit() {
    let event: ToggleInputEvent = {
      current: currentUnit,
      new: toggle.first,
    };

    if (currentUnit == toggle.first) {
      event.new = toggle.second;
    }

    setcurrentUnit(event.new);
    if (onToggleCallback) {
      onToggleCallback(event);
    }
  }

  return (
    <ContainerStyled>
      <SimpleInput disabled={disabled} {...props} />
      <UnitStyled disabled={disabled}>{currentUnit}</UnitStyled>
      <ToggleIconStyled onClick={switchUnit}>
        <SymbolsReplace />
      </ToggleIconStyled>
    </ContainerStyled>
  );
};

export default Toggle;
