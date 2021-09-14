import { StyledMenu, StyledMenuItem } from "./SideMenu.style";
import { Link } from "react-router-dom";

export function SideMenu() {
  return (
    <>
      <StyledMenu>
        <StyledMenuItem key="1">
          <Link to="/work">Work</Link>
        </StyledMenuItem>
        <StyledMenuItem key="2">
          <Link to="/personal">Personal</Link>
        </StyledMenuItem>
        <StyledMenuItem key="3">
          <Link to="/other">Other</Link>
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
