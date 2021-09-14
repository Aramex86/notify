import { ReactNode } from "react";
import { BoxType, StyledBox } from "./Box.style";

interface PropsWithChildren extends BoxType {
  children: ReactNode;
}

export function Box({ children, ...rest }: PropsWithChildren) {
  return <StyledBox styles={rest}>{children}</StyledBox>;
}
