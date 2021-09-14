import styled from "styled-components";
import { Header } from "antd/lib/layout/layout";

export interface HeaderStyleType {
  background?: string;
  height?: "auto" | string;
  color?: string;
  display?: "block" | "flex";
  justifyContent?: "space-between" | "space-around" | "space-evenly";
}

export const StyledHeader = styled(Header)(
  ({ styles }: { styles: HeaderStyleType }) => ({
    // boxShadow: `1px solid ${Colors.white}`,
    ...styles,
  })
);
