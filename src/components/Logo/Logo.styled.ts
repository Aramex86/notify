import { Colors } from "./../../enums/colors";
import styled from "styled-components";

export interface LogoType {
  width?: "auto" | string;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
}

export const StyledLogo = styled.div(({ styles }: { styles: LogoType }) => ({
  "& a": {
    color: Colors.white,
  },
  ...styles,
}));
