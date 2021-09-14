import { Form, Select, Input, Button } from "antd";
import { AddTask } from "components/Button/Button.style";
import { StyledFormItem, StyledInput, StyledSelect } from "./Form.style";
import { DatePicker } from "antd";
import { useState } from "react";

interface IForm {
  handleOk: () => void;
}

interface Values {
  title: string;
  category: string;
  description: string;
  date: string;
}

export function AppForm({ handleOk }: IForm) {
  const [date, setDate] = useState<string>("");
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const [form] = Form.useForm();
  const onFinish = (values: Values) => {
    console.log("values", values.date);
    const value = {
      ...values,
      date: date,
    };
    console.log("VALUE", value);
    form.resetFields();
    handleOk();
  };

  function onChange(date: any, dateString: string) {
    console.log(date, dateString);
    setDate(dateString);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="nest-messages"
      validateMessages={validateMessages}
    >
      <StyledFormItem
        label="Category"
        name={["category"]}
        rules={[{ required: true }]}
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
        rules={[{ required: true }]}
      >
        <StyledInput />
      </StyledFormItem>
      <StyledFormItem name={["Description"]} label="Description">
        <StyledInput.TextArea />
      </StyledFormItem>
      <StyledFormItem name={["Date"]} rules={[{ required: true }]}>
        <DatePicker onChange={onChange} />
      </StyledFormItem>
      <AddTask type="primary" htmlType="submit">
        Add Task
      </AddTask>
    </Form>
  );
}
