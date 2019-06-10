import styled from 'styled-components';

export default styled.button`
  display: block;
  text-align: center;
  font-size: 3rem;
  position: relative;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 0.125rem);
    border-bottom: 0.125rem solid white;
    left: 50%;
    right: 50%;
    transition: all 0.5s ease;
  }
  &:hover::after {
    left: 0;
    right: 0;
    transition: all 0.5s ease;
  }
  @media (min-width: 768px) {
    display: inline-flex;
    font-size: 1.5rem;
    margin: 0;
    padding: 0 22px;
  }
`;
