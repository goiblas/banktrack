import styled from "@emotion/styled"

const WrapperCard = styled.div`
    width: 100%;
    padding: 32px;
    background-color: ${({theme}) => theme.colors.backgrounds.card};
    border-radius: ${({theme}) => theme.radius.medium};
    margin-bottom: 2rem;
    box-shadow: ${({theme}) => theme.shadows.medium};
`

const Content = styled.div`
    max-width: ${({maxWidth}) => maxWidth};
    margin: 0 auto;
`

const Card = ({ contentWith = 340, children, className }) => {
    return (
        <WrapperCard className={className}>
            <Content maxWidth={`${contentWith / 16}rem`}>
                {children}
            </Content>
        </WrapperCard>
    )
}

export default Card