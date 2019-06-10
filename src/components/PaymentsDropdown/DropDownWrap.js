import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  height: auto;
  top: 60px;
  right: -43px;
  color: #c9cacc;
  background-color: #484b54;
  border-radius: 15px;
  transition: all ease 300ms;
  white-space: nowrap;
  z-index: 1000;
  &::after {
    position: absolute;
    left: 75%;
    top: -10px;
    width: 0;
    height: 0;
    content: '';
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #484b54;
  }
  div > img {
    position: relative !important;
    top: initial !important;
    right: initial !important;
  }
  li {
    align-self: flex-start;
    list-style: none;
    color: #c9cacc;
    &:hover {
      color: white;
    }
  }
`;
