import styled from 'styled-components';

const ArrowDown = styled.div`
  align-self: center;
  height: 10px;
  width: 10px;
  bottom: 2px;
  position: relative;
  border: solid ${props => props.color || 'white'};
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  cursor: pointer;
`;

export default ArrowDown;
