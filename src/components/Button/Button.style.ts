import { Button } from "antd";
import { Colors } from "enums/colors";
import styled from "styled-components";

export interface BtnProps {
  width?: string;
  height?: string;
  background?: string;
  position?: "absolute" | "relative" | "static" | "inherit";
}

export const AddButton = styled(Button)(({ styles }: { styles: BtnProps }) => ({
  borderRadius: "100px",
  right: "100px",
  bottom: "50px",
  color: `${Colors.white}`,
  // border: `1px solid ${Colors.white}`,
  fontWeight: 900,
  fontSize: "18px",
  lineHeight: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: `${Colors.dodgerBlue}`,

  ...styles,
}));

export const AddTask = styled(Button)`
  border-radius: 5px;
`;
