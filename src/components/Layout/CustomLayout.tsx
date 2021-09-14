import { ReactNode } from "react";
import { LayoutStyleType, StyledLayout } from "./Layout.style";
export interface LayoutType extends LayoutStyleType {
  children: ReactNode;
}

export function CustomLayout({ children, ...rest }: LayoutType) {
  return <StyledLayout styles={rest}>{children}</StyledLayout>;
}
