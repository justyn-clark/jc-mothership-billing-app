import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
    width: 100%;   
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } 
  #app {
    .ReactTable {
      .-header {
        height: 60px;
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid rgba(0,0,0,0.02);
        box-shadow: none;
      }
      .rt-tr {
        padding: 0 2rem;
      }
      .rt-thead .rt-tr {
        text-align: left;
        align-items: center;
      }
      .rt-td {
        display: flex;
        padding: .5%;
        align-items: center;
        font-weight: lighter;
      }
      .rt-th {
        padding: 1px;
      }
      .rt-expandable {
        font-size: 12px;
      }
    }
  }
`;

export default GlobalStyle;
