import { ReactNode } from "react";
import { AddButton, BtnProps } from "./Button.style";

interface ButtonProps extends BtnProps {
  children: ReactNode;
  onClick: () => void;
  type?: string;
  htmlType?: string;
}

export function AddBtn({ children, onClick, ...rest }: ButtonProps) {
  return (
    <AddButton styles={rest} onClick={onClick}>
      {children}
    </AddButton>
  );
}
