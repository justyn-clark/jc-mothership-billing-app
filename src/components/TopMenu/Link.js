import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 14px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-decoration: none;
  border-radius: 3px;
  img {
    margin-right: 0.5rem;
  }
  &.logo {
    font-size: 20px;
    background: none !important;
  }
  &.quote {
    color: #f7ca02;
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.19);
  }
`;
