import { Form, Input, Select } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
  width: 80%;
  text-align: right;
`;
export const StyledInput = styled(Input)(({}) => ({}));

export const StyledSelect = styled(Select)`
  width: 30%;
`;
