import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  .box{
    border: 2px solid #424242;
    border-radius: 25px;
    padding-left:5px;
    padding-bottom:5px;
  }
  
  .scrollable{
    overflow:scroll;
    max-height: 62rem;
    overflow-x: hidden;
}

.scrollable ::-webkit-scrollbar{}

::-webkit-scrollbar {
    width: 10px;
  }
  
::-webkit-scrollbar-track {
    background: #868e96;
  }
  
::-webkit-scrollbar-thumb {
    background: #424242;
  }
  
::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .container{
    min-height: 90vh !important;
}

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
