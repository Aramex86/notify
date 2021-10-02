import { AddTask } from "components/Button/Button.style";
import { AppForm } from "components/Form/AppForm";
import { ReactNode } from "react";
import { StyledModal } from "./AppModal.style";

interface ModalInterface {
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  children?: ReactNode;
  title: string;
  footer?: any;
}

export function AppModal({
  handleOk,
  handleCancel,
  isModalVisible,
  children,
  title,
  footer,
}: ModalInterface) {
  return (
    <StyledModal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={footer || []}
    >
      {children}
    </StyledModal>
  );
}
