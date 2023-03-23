import { FunctionComponent, SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { SimpleInputInterface } from "../interface";
import { ErrorSpanCss, InputBoxCss, InputCss } from "../styles";

const InputContainerStyled = styled.div`
  ${InputBoxCss}

  .input-style {
    ${InputCss}
  }
`;

const SpanStyled = styled.span`
  ${ErrorSpanCss}
`;

const SimpleInput: FunctionComponent<SimpleInputInterface> = ({
  useValue,
  onValueChange,
  useValidator,
  validState,
  errorMessage,
  disabled,
  className,
  type,
  autocomplete,
  inputmode,
  lockValue,
  selectOnClick,
  label,
  ...props
}) => {
  const [validInput, setvalidInput] = useState(true);
  const [currValue, setCurrValue] = useState(useValue || "");

  useEffect(() => {
    if (validState != undefined) {
      setvalidInput(validState);
    }
  }, [validState]);

  function updateValue(event: SyntheticEvent<HTMLInputElement>) {
    let newValue = event.currentTarget.value;

    if (validState != undefined) {
      setvalidInput(validState);
    }

    if (validState == undefined && useValidator) {
      setvalidInput(useValidator(newValue, label));
    }

    if (onValueChange) {
      onValueChange(newValue, label);
    }

    setCurrValue(newValue);
  }

  useEffect(() => {
    if (useValidator) {
      setvalidInput(useValidator(useValue));
    }
  }, []);

  function handleInputClick(event: SyntheticEvent<HTMLInputElement>) {
    if (selectOnClick) {
      event.currentTarget.select();
    }
  }

  return (
    <InputContainerStyled>
      <input
        className={`input-style InputElement ${className || ""}`}
        disabled={disabled}
        type={type}
        value={disabled || lockValue ? useValue : currValue}
        onChange={updateValue}
        autoComplete={autocomplete}
        inputMode={inputmode}
        onClick={handleInputClick}
        {...props}
      />
      {!validInput && (
        <SpanStyled className={`InputErrorMessage`}>
          <div></div>
          <div>{errorMessage}</div>
        </SpanStyled>
      )}
    </InputContainerStyled>
  );
};

SimpleInput.defaultProps = {
  errorMessage: "Invalid Input",
  disabled: false,
  type: "text",
  autocomplete: "enabled",
};

export default SimpleInput;
