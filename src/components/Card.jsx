import styled from "@emotion/styled"

const WrapperCard = styled.div`
    width: 100%;
    padding: 32px;
    background-color: #fff;
    border-radius: 20px;
    margin-bottom: 2rem;
    box-shadow: 0 3px 5px rgba(0,0,0, 0.05),
                0 12px 24px rgba(0,0,0,0.1);
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