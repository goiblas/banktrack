import styled from "@emotion/styled"

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    border-radius: ${({theme}) => theme.radius.full};
    height: ${({theme}) => theme.formControls.height};
    border: none;
    background-image:${({theme}) => `linear-gradient(to right, ${theme.colors.gradients.primary.join(',')})`};
    padding-inline-start: 1.5rem;
    padding-inline-end: 1.5rem;
    min-width: 12rem;
    font-size: ${({theme}) => theme.typography.size.large};
    color: ${({theme}) => theme.colors.white};
    font-weight: ${({theme}) => theme.typography.weight.bold};
    text-decoration: none;
`;

export default Button