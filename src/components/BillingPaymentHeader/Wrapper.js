import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 12rem;
  padding: 0 2rem;
  text-align: center;
  > div {
    align-self: center;
    position: relative;
    img {
      position: absolute;
      top: 15px;
      right: 0px;
    }
  }
  > div > div {
    display: flex;
  }
  p {
    font-size: 20px;
  }
  p,
  span {
    font-weight: bold;
  }
  span {
    color: #3755b0;
    margin-right: 1rem;
  }
  @media (min-width: 768px) { 
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  padding: 0 2rem;
  text-align: left;
`;

export default Wrapper;
