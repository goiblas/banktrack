import styled from "@emotion/styled"
import Card from "../components/Card"
import Button from "../components/Button"
import Title from "../components/Title"
import imageErrorSrc from "../assets/icon-connection-error.svg"

const ButtonStyled = styled(Button)`
    text-decoration: none;
    margin-bottom: 1.75rem;
`

const TitleStyled = styled(Title)`
    justify-content: center;
    margin-bottom: 1.75rem;
`

const Center = styled.div`
    text-align: center;
`

const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.neutrals[700]};
    font-size: ${({theme}) => theme.typography.size.medium};
    line-height: ${({theme}) => theme.typography.lineHeight.medium};
    margin-bottom: 1.75rem;
`

const Image = styled.img`
    margin: 2rem auto 1.5rem;
    display: block;
    width: 88px;
    height: auto;
`

const Error = ({ onGoBack, errorMessage }) => {
    const handleClick = ev => {
        ev.preventDefault()
        onGoBack()
    }
    
    return (
        <Card contentWith={280}>
            <Center>
                <Image src={imageErrorSrc} width="88" height="75" alt="" />
                <TitleStyled>Error de Conexión</TitleStyled>
                <Paragraph>
                    La conexión con el banco ha fallado.
                </Paragraph>
                <Paragraph>
                    {errorMessage}
                </Paragraph>
                <ButtonStyled as="a" href="#" onClick={handleClick}>
                    Volver
                </ButtonStyled>
            </Center>
        </Card>
    )
}

export default Error
