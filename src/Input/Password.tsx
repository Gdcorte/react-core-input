import { AnatomyEye, AnatomyEyeCrossed } from "@gdcorte/react-core-icons";
import { FunctionComponent, useMemo, useState } from "react";
import styled from "styled-components";
import { SimpleInputInterface } from "../interface";
import { InputBoxCss, InputIconBoxCss } from "../styles";
import SimpleInput from "./Simple";

const WrapperStyled = styled.div`
  ${InputBoxCss}
`;

const IconStyled = styled.div`
  ${InputIconBoxCss}
`;

export interface PasswordInterface extends SimpleInputInterface {}

const Password: FunctionComponent<PasswordInterface> = ({ ...props }) => {
  const [inputType, setinputType] = useState<"text" | "password">("password");
  const [lockStatus, setlockStatus] = useState(true);

  function toggleImgIcon() {
    let newInputStatus: "text" | "password" = "password";

    if (inputType == "password") {
      newInputStatus = "text";
    }

    setinputType(newInputStatus);
    setlockStatus(!lockStatus);
  }

  const PasswordIcon = useMemo(() => {
    return lockStatus ? AnatomyEyeCrossed : AnatomyEye;
  }, [lockStatus]);

  return (
    <WrapperStyled>
      <SimpleInput {...props} type={inputType} />

      <IconStyled className="cursor-pointer" onClick={toggleImgIcon}>
        <PasswordIcon />
      </IconStyled>
    </WrapperStyled>
  );
};

Password.defaultProps = {
  errorMessage: "Invalid Password",
};

export default Password;
