import {
  ChangeEvent,
  FunctionComponent,
  HTMLAttributes,
  SyntheticEvent,
  useState,
} from "react";
import styled from "styled-components";
import { InputCss } from "../styles";

const Container = styled.div<{ maxChars?: number }>`
  display: inline-grid;

  min-width: 3ch;
  max-width: ${({ maxChars }) => maxChars}ch;
`;

const TextArea = styled.textarea`
  ${InputCss};
  resize: unset;

  border-left: 2px solid ${({ theme: { colors } }) => colors.primary.base};
  border-top: transparent;
  border-bottom: transparent;
  border-right: transparent;
`;

export interface MultilineInputProps
  extends HTMLAttributes<HTMLTextAreaElement> {
  minChars?: number;
  maxChars?: number;
  initialValue?: string;
  onValueChange?: (_: string) => void;
  selectOnClick?: boolean;
  lockValue?: boolean;
  lockedValueChange?: OnChangeSignature;
  lockedValue: string;
}

type OnChangeSignature = (_: ChangeEvent<HTMLTextAreaElement>) => void;

const MultilineInput: FunctionComponent<MultilineInputProps> = ({
  className,
  maxChars,
  minChars,
  initialValue,
  onValueChange,
  selectOnClick,
  lockValue,
  lockedValueChange,
  lockedValue,
  ...props
}) => {
  const [rows, setrows] = useState(1);
  const [cols, setcols] = useState(minChars);

  const [inputValue, setinputValue] = useState(initialValue || "");

  function resizeInput(event: SyntheticEvent<HTMLTextAreaElement>) {
    const element = event.currentTarget;
    const text = element.value;
    const lineText = text.split("\n");

    let newRows = lineText.length;
    let newCols = minChars || 1;
    lineText.forEach((text) => {
      let size = text.length;

      // Adjusts rows for text within a paragraph
      // that is bigger than maximum allowed chars
      if (maxChars) {
        const extraRows = Math.floor(size / maxChars);

        if (extraRows > 0) {
          newRows += extraRows;
          size = maxChars;
        }
      }

      // Just a simple and crude Math.max implementasion
      if (size > newCols) {
        newCols = size;
      }
    });

    setcols(newCols);
    setrows(newRows);
  }

  function handleValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newInputValue = event.currentTarget.value;
    setinputValue(newInputValue);

    if (onValueChange) {
      onValueChange(newInputValue);
    }
  }

  function handleInputClick(event: SyntheticEvent<HTMLTextAreaElement>) {
    if (selectOnClick) {
      event.currentTarget.select();
    }
  }

  return (
    <Container className="multiline-input container">
      <TextArea
        className={`multiline-input ${className || ""}`}
        onInput={resizeInput}
        onChange={lockValue ? lockedValueChange : handleValueChange}
        value={lockValue ? lockedValue : inputValue}
        rows={rows}
        cols={cols}
        onClick={handleInputClick}
        {...props}
      />
    </Container>
  );
};

MultilineInput.defaultProps = {
  minChars: 1,
};

export default MultilineInput;
