import { Form, Select, Input, Button } from "antd";
import { AddTask } from "components/Button/Button.style";
import { StyledFormItem, StyledInput, StyledSelect } from "./Form.style";
import { DatePicker } from "antd";
import { useState } from "react";
import { useAppDispatch } from "redux-toolkit/hooks";
import { addWorkTask } from "redux-toolkit/slices/WorkSlice";
import { addPersonalTask } from "redux-toolkit/slices/PersonalSlice";

interface IForm {
  handleOk: () => void;
}

interface Values {
  id: string;
  title: string;
  category: string;
  summary: string;
  Date: string;
}

export function AppForm({ handleOk }: IForm) {
  const [date, setDate] = useState<string>("");
  const dispatch = useAppDispatch();
  const validateMessages = {
    required: "${label} is required!",
  };

  const [form] = Form.useForm();
  const onFinish = (values: Values) => {
    const value: Values = {
      ...values,
      id: String(Date.now()),
      Date: date,
    };
    console.log("VALUE", value);
    handleOk();
    if (value["category"] === "work") return dispatch(addWorkTask(value));
    if (value["category"] === "personal")
      return dispatch(addPersonalTask(value));
    form.resetFields();
  };

  function onChange(date: any, dateString: string) {
    setDate(dateString);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="nest-messages"
      validateMessages={validateMessages}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <StyledFormItem
        label="category"
        name={["category"]}
        rules={[{ required: true }]}
        labelCol={{ span: 24 }}
      >
        <StyledSelect>
          <Select.Option value="work">Work</Select.Option>
          <Select.Option value="personal">Personal</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </StyledSelect>
      </StyledFormItem>
      <StyledFormItem
        name={["title"]}
        label="Title"
        rules={[{ required: true }, { max: 150, message: "Must be max 150" }]}
        labelCol={{ span: 24 }}
      >
        <StyledInput />
      </StyledFormItem>
      <StyledFormItem
        name={["summary"]}
        label="Summary"
        labelCol={{ span: 24 }}
        rules={[{ required: true }]}
      >
        <StyledInput.TextArea />
      </StyledFormItem>
      <StyledFormItem
        name={["Date"]}
        rules={[{ required: true }]}
        labelCol={{ span: 24 }}
      >
        <DatePicker onChange={onChange} />
      </StyledFormItem>
      <AddTask type="primary" htmlType="submit">
        Add Task
      </AddTask>
    </Form>
  );
}
