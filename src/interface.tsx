import { HTMLProps, ReactNode } from "react";

export const inputModes = [
  "text",
  "search",
  "email",
  "tel",
  "url",
  "none",
  "numeric",
  "decimal",
] as const;
export type InputModes = typeof inputModes[number];

export const inputTypes = ["text", "password", "number", "checkbox"] as const;
export type InputTypes = typeof inputTypes[number];

export interface SimpleInputInterface extends HTMLProps<HTMLInputElement> {
  useValue?: string;
  onValueChange?: CallableFunction;
  useValidator?: CallableFunction;
  validState?: boolean; //When validator and validState are passed, this will override validator method
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  autocomplete?: string;
  type?: InputTypes;
  inputmode?: InputModes;
  lockValue?: boolean;
  selectOnClick?: boolean;
  label?: string;
}

export interface ToggleInputEvent {
  current: ReactNode;
  new: ReactNode;
}
