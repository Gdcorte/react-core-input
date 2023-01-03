import { FunctionComponent, useState } from "react";
import { CaptionStyled, LabelStyled } from "./styles";

import Checkmark from "./Checkmark";

export interface CheckboxInputProps {
  label: string | JSX.Element;
  defaultChecked?: boolean;
  changeCallback: CallableFunction;
}

const CheckboxInput: FunctionComponent<CheckboxInputProps> = ({
  changeCallback,
  label,
  defaultChecked,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  function changeState() {
    let checkState = !checked;
    setChecked(checkState);

    changeCallback(checkState);
  }

  return (
    <>
      <LabelStyled>
        <Checkmark checked={checked} onChange={changeState} />

        <CaptionStyled className={"margin-left"} checked={checked || false}>
          {label}
        </CaptionStyled>
      </LabelStyled>
    </>
  );
};

CheckboxInput.defaultProps = {
  defaultChecked: false,
};

export { CheckboxInput };
