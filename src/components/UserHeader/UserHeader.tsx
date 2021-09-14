import { MenuBtn, StyledUserHeader } from "./UserHeader.style";

export function UserHeader() {
  return (
    <StyledUserHeader>
      <MenuBtn onClick={() => console.log("click")} />
    </StyledUserHeader>
  );
}
