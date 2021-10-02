import { Colors } from "enums/colors";
import styled from "styled-components";
import { Card } from "antd";

interface Done {
  done?: boolean | undefined;
  p?: string;
}

export const StyledCard = styled(Card)`
  cursor: pointer;
  transition: 0.5s ease;
  width: 200px;
  &:hover {
    box-shadow: 0px 3px 9px 2px ${Colors.cardHover};
  }
`;

export const StyledTitle = styled.h3`
  text-decoration: ${({ done }: Done) => (done ? "line-through" : "")};
`;
export const StyledSummary = styled.p`
  /* width: 100%; */
  word-wrap: break-word;
  height: 50px;
`;
export const StyledDate = styled.div`
  text-align: right;
`;
