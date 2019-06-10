import styled from 'styled-components';

const XBtn = styled.span`
  position: absolute;
  display: inline-block;
  width: 50px;
  height: 50px;
  overflow: hidden;
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    &::before,
    &::after {
      background: blue;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
  }

  &::before,
  &::after {
    height: 1px;
  }
`;

export default XBtn;
