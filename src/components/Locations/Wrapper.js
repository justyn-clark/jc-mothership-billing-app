import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  font-weight: lighter;
  p {
    font-size: 14px;
  }
  span {
    font-size: 12px;
    color: grey;
  }
  .pickup {
    margin-right: 1rem;
    width: 50%;
  }
  .delivery {
    width: 50%;
  }
`;

export default Wrapper;
