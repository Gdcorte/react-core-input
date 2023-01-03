import { FunctionComponent, useEffect, useState } from "react";
import { CaptionStyled, LabelStyled, RadioContainer } from "./styles";

import RadioMark from "./Radiomark";

export type RadioInputOption = {
  label: string | JSX.Element;
  value: string;
};

export interface RadioInputProps {
  options: RadioInputOption[];
  defaultValue?: string;
  useRow?: boolean;
  changeCallback: CallableFunction;
}

const RadioInput: FunctionComponent<RadioInputProps> = ({
  options,
  defaultValue,
  changeCallback,
  useRow,
  ...props
}) => {
  const [selectedValue, setSelectedValue] =
    useState<string | undefined>(undefined);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  function changeSelected(value: string) {
    setSelectedValue(value);
    changeCallback(value);
  }

  const RadioOptions = options.map((singleOption) => {
    return (
      <LabelStyled key={`radio-${singleOption.value}`}>
        <RadioMark
          checked={selectedValue == singleOption.value}
          onChange={() => changeSelected(singleOption.value)}
          {...props}
        />

        <CaptionStyled checked={selectedValue == singleOption.value}>
          {singleOption.label}
        </CaptionStyled>
      </LabelStyled>
    );
  });

  return <RadioContainer useRow={useRow}>{RadioOptions}</RadioContainer>;
};

export { RadioInput };
