import { PlusOutlined } from "@ant-design/icons";
import { Card } from "components";
import { Box } from "components/Box/Box";
import { AddBtn } from "components/Button/AddBtn";
import { Colors } from "enums/colors";
import { useState } from "react";
import { useAppSelector } from "redux-toolkit/hooks";
import { AppModal } from "components/Modal/AppModal";
import { AppForm } from "components/Form/AppForm";

export function Work() {
  const {
    work: { work },
  } = useAppSelector(({ work }) => ({
    work,
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
        {work.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            title={el.title}
            category={el.category}
            summary={el.summary}
            Date={el.Date}
            done={el.done}
            link="work"
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
        title="Add Work Task"
        // data={<AppForm handleOk={handleOk} />}
      >
        <AppForm handleOk={handleCancel} />
      </AppModal>
    </Box>
  );
}
