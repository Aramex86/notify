import { PlusOutlined } from "@ant-design/icons";
import { AppForm, AppModal, Box, Card } from "components";
import { AddBtn } from "components/Button/AddBtn";
import { Colors } from "enums/colors";
import { useState } from "react";
import { useAppSelector } from "redux-toolkit/hooks";

export function Other() {
  const {
    other: { other },
    personal: { personal },
  } = useAppSelector(({ other, personal }) => ({
    other,
    personal,
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Box position="relative" width="100%">
      <Box width="100%" display="flex" padding="10px 10px" flexWrap="wrap">
        {other.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            title={el.title}
            category={el.category}
            summary={el.summary}
            Date={el.Date}
            done={el.done}
            link="other"
          />
        ))}
      </Box>
      <AddBtn
        width="40px"
        height="40px"
        position="absolute"
        onClick={showModal}
      >
        <PlusOutlined style={{ color: Colors.white }} />
      </AddBtn>
      <AppModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        title="Add Other Task"
        // data={<AppForm handleOk={handleOk} />}
      >
        <AppForm handleOk={handleCancel} />
      </AppModal>
    </Box>
  );
}
