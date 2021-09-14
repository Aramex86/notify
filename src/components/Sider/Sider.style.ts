import styled from "styled-components";
import { Layout } from "antd";

export interface SiderType {
  background?: string;
  height?: string;
}

export const StyledSider = styled(Layout.Sider)(
  ({ styles }: { styles: SiderType }) => ({ ...styles })
);
