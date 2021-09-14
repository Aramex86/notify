import { ReactNode } from "react";
import { LogoType, StyledLogo } from "./Logo.styled";

interface ILogo extends LogoType {
  children: ReactNode;
}

export function Logo({ children, ...rest }: ILogo) {
  return <StyledLogo styles={rest}>{children}</StyledLogo>;
}
