import { createGlobalStyle } from "styled-components"
import "@fontsource/nunito-sans"

const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        width: 100%;
        height: 100%;
        min-width: 300px;
        margin: 0;
        padding: 0;
        border: 0;
        background-color: #ffffff;
        color: rgb(51, 51, 51);
        font-size: 16px;
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        overflow: hidden auto;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
    }

    a {
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        margin: 0;
        transition: all 0.25s ease-out 0s;
        transform: translate3d(0, 0, 0,);
        display: inline-block;
    }

    h1 {
        font-size: 32px;
        font-weight: 900;
        line-height: 36px;
        margin: 0 0 1.5rem 0;
    }   

    h2 {
        font-size: 24px;
        font-weight: 800;
        line-height: 28px;
        margin: 0 0 0.5em 0;
    }

    h3 {
        font-size: 20px;
        font-weight: 800;
        line-height: 28px;
        margin: 0 0 0.5em 0;
    }

    h4 {
        margin: 0;
    }
    
    h5 {
        margin: 0;
    }

    hr {
        margin: 0;
    }

    p {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 1.5em;
        font-weight: 300;
    }

    button {
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        border-radius: 4px;
        box-shadow: 0 2px 5px 0 rgb(0, 0, 0 / 10%);
        cursor: pointer;
        padding: 13px 20px;
        text-decoration: none;
        transition: all 0.15s ease-out 0s;
        transform: translate3d(0, 0, 0);
    }
`
export default GlobalStyle
