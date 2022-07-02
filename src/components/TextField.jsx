import { useId, useState } from "react"
import styled from "@emotion/styled"
import alpha from 'color-alpha'
import VisibilityHidden from "./VisibilityHidden"

const InputBase = styled.input`
    border: ${({theme}) => `2px solid ${theme.colors.neutrals[300]}`};
    border-radius: ${({theme}) => theme.radius.small};
    height: ${({theme}) => theme.formControls.height};
    padding: 0 1rem;
    width: 100%;
    color: ${({theme}) => theme.colors.neutrals[900]};
    font-size: ${({theme}) => theme.typography.size.medium};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    transition-property: border-color, box-shadow;
    transition-duration: .5s;
    box-shadow: ${({theme}) => `0 0 0 ${alpha(theme.colors.primary, 0)}`};

    &:not(:focus)&::placeholder {
        text-align: center;
    }
    &:focus {
        outline: none;
    }
    &:focus {
        border-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.primary};
        box-shadow: ${({theme}) => `0 0 5px ${alpha(theme.colors.primary, 0.5)}`};
    }
`

const Wrapper = styled.div`
    position: relative;
`

const Label = styled.label`
    position: absolute;
    inset-inline-start: .75rem; // rtl ready
    top: 0;
    background-color: ${({theme}) => theme.colors.white};
    padding: 0 .35rem;
    color: ${({theme, hasFocus}) => hasFocus ? theme.colors.primary : theme.colors.neutrals[500]} ;
    font-size:${({theme}) => theme.typography.size.label};
    font-weight: ${({theme}) => theme.typography.weight.bold};
    transform: translateY(-50%);
    transition: color .5s;
    letter-spacing: 0;
`

const Help = styled.div`
    text-align: center;
    font-size: ${({theme}) => theme.typography.size.extraSmall};
    color: ${({theme}) => theme.colors.neutrals[500]};
    line-height: ${({theme}) => theme.typography.lineHeight.large};
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
            <VisibilityHidden when={!value}>
                <Label hasFocus={hasFocus} htmlFor={id}>{label}</Label>
            </VisibilityHidden>

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