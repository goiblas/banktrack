import { useState } from "react"
import TextField from "./TextField"
import styled from "@emotion/styled"
import EyeIcon from "../icons/Eye"

const Wrapper = styled.div`
    position: relative;
`

const TextFieldStyled = styled(TextField)`
    padding-inline-end: 56px; // rtl ready https://developer.mozilla.org/es/docs/Web/CSS/padding-inline-end
`

const IconButton = styled.button`
    position: absolute;
    inset-block-start: 12px; // rtl ready https://developer.mozilla.org/es/docs/Web/CSS/inset-block-start
    inset-inline-end: 12px; 
    display: "flex";
    align-items: "center";
    justify-content: "center";
    width:40px;
    height:40px;
    background-color: transparent;
    border: none;
`

const PasswordField = props => {
    const [type, setType] = useState("password")
    const [hasFocus, setHasFocus] = useState(false)
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
            <TextFieldStyled 
                onFocus={focusHandler}
                onBlur={blurHandler}
                type={type}
                {...textFieldProps}
                />

            <IconButton aria-label={type === "password" ? "ver contraseña" : "ocultar contraseña"} type="button" onClick={handleClick}>
                <EyeIcon color={hasFocus ? "#4021C8" : "#929292" } />
            </IconButton>
        </Wrapper>
    )
}

export default PasswordField