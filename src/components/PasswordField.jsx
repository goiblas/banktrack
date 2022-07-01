import { useState } from "react"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import TextField from "./TextField"
import EyeIcon from "../icons/Eye"

const Wrapper = styled.div`
    position: relative;
`

const IconButton = styled.button`
    position: absolute;
    inset-block-start: 11px; 
    inset-inline-end: 12px; // rtl ready https://developer.mozilla.org/es/docs/Web/CSS/inset-block-start
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height:40px;
    background-color: ${({theme}) => theme.colors.white};
    border: none;
`

const PasswordField = props => {
    const [type, setType] = useState("password")
    const [hasFocus, setHasFocus] = useState(false)
    const theme = useTheme()
    const { onFocus, onBlur, ...textFieldProps } = props

    const handleClick = () => {
        setType(type === "password" ? "text" : "password")
    }

    const focusHandler = () => {
        setHasFocus(true)
        onFocus?.()
    }

    const blurHandler = () => {
        setHasFocus(false)
        onBlur?.()
    }

    return (
        <Wrapper>
            <TextField 
                onFocus={focusHandler}
                onBlur={blurHandler}
                type={type}
                {...textFieldProps}
                />

            <IconButton aria-label={type === "password" ? "ver contraseña" : "ocultar contraseña"} type="button" onClick={handleClick}>
                <EyeIcon color={hasFocus ?  theme.colors.primary : theme.colors.neutrals[500] } />
            </IconButton>
        </Wrapper>
    )
}

export default PasswordField