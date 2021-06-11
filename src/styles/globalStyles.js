import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, "system-ui", "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: inherit;
  }

  hr {
    height: 0;
    color: inherit; 
  }

  abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    font-size: 1em; 
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0; 
    border-color: inherit; 
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%;
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  hr {
    border-top-width: 1px;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
    margin: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    min-width: 240px;
    height: 100%;
    font-size: 16px;
    color: #242424;
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    color: #fff;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
    margin: 1.25rem 0; 
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    h2 {
      margin: 0;
    }

    p {
      font-size: clamp(1rem, 1rem + 0.5vh, 4em);
      line-height: 2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    h2 {
      font-size: 2.5rem;
      margin: 0;
    }

    p {
      line-height: 2.375rem;
    }
  }

`

export default GlobalStyle
