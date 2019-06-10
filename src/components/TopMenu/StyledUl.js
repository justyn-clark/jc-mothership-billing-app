import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
`;

export default StyledUl;
