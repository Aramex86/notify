import { ReactNode } from "react";
import { SiderType, StyledSider } from "./Sider.style";

interface SiderProps extends SiderType {
  children: ReactNode;
}

export function Sider({ children, ...rest }: SiderProps) {
  return <StyledSider styles={rest}>{children}</StyledSider>;
}
