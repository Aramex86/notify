import styled from "styled-components";
import { Layout } from "antd";

export interface LayoutStyleType {
  background?: string;
  dispaly?: "block" | "flex" | "inherit";
}

export const StyledLayout = styled(Layout)(
  ({ styles }: { styles: LayoutStyleType }) => ({ ...styles })
);
