import { useState } from "react"
import TextField from "./TextField"
import styled from "@emotion/styled"
import tooglePasswordIconSrc from "../assets/icon-view.svg"

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
    const [type, setType] = useState("password");

    const handleClick = () => {
        setType(type === "password" ? "text" : "password");
    }

    return (
        <Wrapper>
            <TextFieldStyled type={type} {...props} />
            
            <IconButton type="button" onClick={handleClick}>
                <img 
                    src={tooglePasswordIconSrc}
                    alt={type === "password" ? "ver contraseña" : "ocultar contraseña"}
                    width="24"
                    height="18"
                />
            </IconButton>
        </Wrapper>
    )
}

export default PasswordField