import { Popconfirm } from "antd";
import { Box } from "components/Box/Box";
import { AddTask } from "components/Button/Button.style";
import { AppModal } from "components/Modal/AppModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deleteOtherTask,
  deletePersonalTask,
  deleteWorkTask,
  doneOtherTask,
  donePersonalTask,
  doneWorkTask,
} from "redux-toolkit/slices";
import {
  StyledCard,
  StyledDate,
  StyledSummary,
  StyledTitle,
} from "./Card.style";

interface CardProps {
  id: string;
  category: string;
  title: string;
  summary: string;
  Date: string;
  done: boolean | undefined;
  link: string;
}

export function Card({
  id,
  category,
  title,
  summary,
  Date,
  done,
  link,
}: CardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  let { cardId }: { cardId: string } = useParams();

  console.log("ID", cardId);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDone = (id: string) => {
    dispatch(doneWorkTask(id));
    dispatch(donePersonalTask(id));
    dispatch(doneOtherTask(id));

    handleOk();
  };

  const handleDelete = (id: string) => {
    dispatch(deleteWorkTask(id));
    dispatch(deletePersonalTask(id));
    dispatch(deleteOtherTask(id));
  };

  return (
    <Box margin="5px">
      <Link to={`/${link}/${id}`}>
        <StyledCard
          title={`${category.toLocaleUpperCase()}`}
          onClick={() => setIsModalVisible(true)}
        >
          <StyledTitle done={done}>
            {title.length > 18 ? `${title.slice(0, 15)}...` : title}
          </StyledTitle>

          <StyledSummary>
            {summary.length >= 64 ? `${summary.slice(0, 20)}...` : summary}
          </StyledSummary>
          <StyledDate>Date: {Date}</StyledDate>
        </StyledCard>
      </Link>
      <AppModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        title={`${title} `}
        footer={[
          <AddTask key="done" type="primary" onClick={() => handleDone(cardId)}>
            Done
          </AddTask>,
          <Popconfirm
            key="delete"
            title="Sure?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(cardId)}
          >
            <AddTask key="delete" type="primary" danger>
              Delete
            </AddTask>
          </Popconfirm>,
        ]}
      >
        <StyledDate>Date: {Date}</StyledDate>
        <div style={{ marginTop: "50px" }}>{summary}</div>
      </AppModal>
    </Box>
  );
}
