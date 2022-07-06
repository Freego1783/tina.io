/* styles.js */
import css from 'styled-jsx/css'

export const GlobalStyles = css.global`
  :root {
    --color-tina-blue-light: #2296fe;
    --color-tina-blue: #2296fe;
    --color-tina-blue-dark: #0574e4;
    --color-tina-blue: #ec4815;
    --color-tina-blue-light: #eb6337;
    --color-tina-blue-dark: #dc4419;
    --color-yellow: #f2c94c;
    --color-green: #6fcf97;
    --color-black: #1c1b2e;
    --color-blue: #241748;
    --color-blue-light: #31215e;
    --color-white: #ffffff;
    --color-gray: #f3f3f3;
    --color-light-gray: #fafafa;
    --blue: #e6faf8;
    --blue-dark: #b4f4e0;

    --color-emphasis: var(--color-tina-blue);
    --color-card-background: var(--color-light-gray);

    --spacer-size: 4.5rem;
    --section-padding: calc(var(--spacer-size) * 2);
    --container-padding: 2rem;
  }

  ::-moz-selection {
    background: var(--blue-dark);
    color: var(--color-blue-light);
  }
  ::selection {
    background: var(--blue-dark);
    color: var(--color-blue-light);
  }

  html {
    min-width: 380px;
    width: 100%;
  }

  .section {
    padding: var(--section-padding) 0;
  }

  h1,
  h2,
  h3,
  h4 {
    p {
      font-weight: inherit;
    }
  }

  .headingLarge {
    font-family: var(--font-sans);
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 1rem;
    font-size: 2.25rem;
    color: #00255b;
  }

  .headingMedium {
    font-size: 1.675rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .textHuge {
    display: block;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.375rem;

    &:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  .textLarge {
    font-size: 1.125rem;
    opacity: 0.85;

    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  }

  .spacer {
    display: block;
    width: 100%;
    height: var(--spacer-size);
  }

  .spacerBig {
    height: calc(var(--spacer-size) * 1.5);
  }

  .orange {
    background: linear-gradient(
      to top right,
      var(--color-tina-blue),
      var(--color-tina-blue-light)
    );
    color: var(--color-white);
  }

  .black {
    background: var(--color-black);
    color: var(--color-white);
  }

  .lightblue {
    background: var(--color-tina-blue);
    color: var(--color-white);
    --color-emphasis: var(--color-tina-blue);
  }

  .blue {
    background: var(--color-blue);
    color: var(--color-white);
    --color-emphasis: var(--color-tina-blue-light);
  }

  .lightGray {
    background: var(--color-light-gray);
    color: var(--color-black);
    --color-card-background: var(--color-white);
  }

  .white {
    background: var(--color-white);
    color: var(--color-blue);
  }
`
