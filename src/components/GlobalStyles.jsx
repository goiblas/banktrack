import { Global, css, useTheme } from '@emotion/react'

const GlobalSyles = () => {
    const theme = useTheme()

    return <Global styles={css`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: ${theme.typography.family};
            background-color: ${theme.colors.backgrounds.app};
            line-height: ${theme.typography.lineHeight.small};
        }
        a {
            color: currentColor;
            font-weight: ${theme.typography.weight.medium};
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
}

export default GlobalSyles