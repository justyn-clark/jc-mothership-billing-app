import styled from 'styled-components';

const LogOutWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    h3 {
      font-weight: normal;
      margin-right: 1rem;
    }
  }
`;

export default LogOutWrap;
