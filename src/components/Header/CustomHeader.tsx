import { ReactNode } from "react";
import { HeaderStyleType, StyledHeader } from "./Header.style";

interface HeaderType extends HeaderStyleType {
  children: ReactNode;
}

export function CustomHeader({ children, ...rest }: HeaderType) {
  return <StyledHeader styles={rest}>{children}</StyledHeader>;
}
