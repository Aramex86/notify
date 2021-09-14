import { AppForm } from "components/Form/AppForm";
import { StyledModal } from "./AppModal.style";

interface ModalInterface {
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
}

export function AppModal({
  handleOk,
  handleCancel,
  isModalVisible,
}: ModalInterface) {
  return (
    <StyledModal
      title="Add Work Task"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <AppForm handleOk={handleOk} />
    </StyledModal>
  );
}
