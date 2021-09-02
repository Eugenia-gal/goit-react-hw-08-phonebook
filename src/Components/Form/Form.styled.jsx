import styled from '@emotion/styled/macro';
import Form from 'react-bootstrap/Form';

const CustomForm = styled(Form)`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  padding: 20px;
  width: 400px;
  font-size: 20px;
  background-color: #fff;

  & button {
    margin-top: 10px;
  }

  & label,
  input {
    display: block;
  }
`;

export default CustomForm;
