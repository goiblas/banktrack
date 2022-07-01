import styled from "@emotion/styled"

const Title = styled.h1`
    color: ${({theme}) => theme.colors.neutrals[900]};
    font-size: ${({theme}) => theme.typography.size.title};
    font-weight: ${({theme}) => theme.typography.weight.bold};
    line-height: ${({theme}) => theme.typography.lineHeight.small};
    margin-bottom: .5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`

export default Title