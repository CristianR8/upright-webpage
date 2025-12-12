import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --Background: #000000;
    --white: #fff;
    --gray: #f2f2f2;
    --cyan: #3ac1c0;
    --blue: #2e2d73;
    --indigo: #0e0142;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--white);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }
`;
