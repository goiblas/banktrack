import { Global, css } from '@emotion/react'

const GlobalSyles = () => (
    <Global styles={css`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: "DM Sans", sans-serif;
            line-height: 1.2;
            background-color: #FDFAF5;
        }
        a {
            color: "currentColor";
            font-weight: 500;
            text-underline-offset: 0.1em;
        }
        input,
        button {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        button {
            cursor: pointer;
        }
    `} />
)

export default GlobalSyles