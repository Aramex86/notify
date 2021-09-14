import styled from "styled-components";
export interface BoxType {
  display?: "block" | "flex";
  width?: number | "auto" | string;
  height?: number | "auto" | string;
  justifyContent?:
    | "initial"
    | "space-between"
    | "center"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  textAlign?: "initial" | "center" | "left" | "right";
  alignItems?: "normal" | "center" | "left" | "right";
  flexDirection?: "row" | "column";
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  color?: string;
  fontWeight?: number;
  overflow?: "auto";
  flexWrap?: "wrap";
  maxHeight?: string;
  padding?: string;
  margin?: string;
  position?: "absolute" | "relative" | "static" | "inherit";
}

export const StyledBox = styled.div(({ styles }: { styles: BoxType }) => ({
  ...styles,
}));
