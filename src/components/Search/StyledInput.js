import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #72747a45;
  padding: 1.2rem 0;
  min-width: 337px;
  height: 30px;
  font-weight: bold;
  outline: none;
  ::placeholder {
    color: black;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: black;
  }
  ::-ms-input-placeholder {
    color: black;
  }
`;

export default Input;
