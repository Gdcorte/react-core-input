import { findBestContrast } from "@gdcorte/react-core-theme";
import { FunctionComponent, HTMLProps, ReactNode } from "react";
import styled from "styled-components";

export const ContainerStyled = styled.div<{ orientation?: string }>`
  margin-bottom: 6px;
  display: flex;
  cursor: default;
  flex-direction: ${({ orientation }) => orientation || "column"};
`;

export const TitleStyled = styled.p<{ bold?: boolean }>`
  color: ${({ theme: { background, fonts }, bold }) =>
    findBestContrast(background.base, fonts)};
  font-weight: ${({ bold }) => (bold ? "bold" : "unset")};
  font-size: 0.85rem;
  margin: 0;
  margin-right: 8px;
`;

export interface LabelProps extends HTMLProps<HTMLDivElement> {
  label: string;
  children: ReactNode;
  orientation?: "column" | "row";
  bold?: boolean;
  key?: string;
}

const Label: FunctionComponent<LabelProps> = ({
  children,
  orientation,
  label,
  bold,
  className,
}) => {
  return (
    <>
      <ContainerStyled orientation={orientation} className={className}>
        <TitleStyled bold={bold}>{label}:</TitleStyled>

        {children}
      </ContainerStyled>
    </>
  );
};

Label.defaultProps = {
  bold: false,
  key: undefined,
};

export default Label;
