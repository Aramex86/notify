import { Colors } from "./../../enums/colors";
import styled from "styled-components";
import { Menu } from "antd";

export const StyledMenu = styled(Menu)(() => ({
  "&.ant-menu": {
    background: Colors.dodgerBlue,
    marginTop: "50%",
    borderRight: "none",
  },
}));
export const StyledMenuItem = styled(Menu.Item)(() => ({
  "& a": {
    color: Colors.white,
    "&:hover": {
      color: Colors.white,
    },
  },
  fontSize: "16px",
  fontWeight: 500,
}));
