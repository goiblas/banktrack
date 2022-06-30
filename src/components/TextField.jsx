import { useId, useState } from "react";
import styled from "@emotion/styled";

const InputBase = styled.input`
    border: 2px solid #D4D4D4;
    border-radius: 8px;
    height: 3.75rem;
    padding: 0 1rem;
    width: 100%;
    color: #222222;
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    transition-property: border-color, box-shadow;
    transition-duration: .5s;
    box-shadow: 0 0 0 rgba(64, 33, 200, 0);

    &:not(:focus)&::placeholder {
        text-align: center;
    }
    &:focus {
        outline: none;
    }
    &:focus {
        border-color: #4021C8;
        color: #4021C8;
        box-shadow: 0 0 5px rgba(64, 33, 200, 0.25);
    }
`

const Wrapper = styled.div`
    position: relative;
`

const Label = styled.label`
    position: absolute;
    inset-inline-start: .75rem; // rtl ready
    top: 0;
    background-color: #ffffff;
    padding: 0 .35rem;
    font-family: "DM Sans", sans-serif;
    color: ${({hasFocus}) => hasFocus ? "#4021C8" : "#929292"} ;
    font-size: 0.875rem;
    font-weight: 700;
    transform: translateY(-50%);
    transition: color .5s;
    letter-spacing: 0;
`

const Help = styled.div`
    text-align: center;
    font-size: 0.75rem;
    color: #929292;
    line-height: 1.4;
    padding: 0.25rem 0;
`

const TextField = props => {
    const { value, id = useId(), type = "text", label, textHelp, onFocus, onBlur, ...rest } = props
    const [hasFocus, setHasFocus] = useState(false)

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
            {value && <Label hasFocus={hasFocus} htmlFor={id}>{label}</Label>}
            <InputBase 
                id={id}
                placeholder={label}
                onFocus={focusHandler}
                onBlur={blurHandler}
                value={value}
                type={type}
                {...rest} />
            {textHelp && <Help>{textHelp}</Help>}
        </Wrapper>
    )
}

export default TextField;