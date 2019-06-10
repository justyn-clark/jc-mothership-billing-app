import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
  background: #54575E linear-gradient(0deg, #54575E 0%, #4e5158 100%);
  overflow: hidden;
  padding: 2rem 0;  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 56px;
`;

export default StyledHeader;
