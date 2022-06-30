import logoSrc from "../assets/bt-icon.png"
import styled from "@emotion/styled";

const FullPage = styled.div`
    min-height: 100vh;
    padding: 0 2rem;
    display: grid;
    place-content: center;
    background-color: #FDFAF5;
`

const Header = styled.header`
    padding: 4rem 0;
`

const Main = styled.main`
    width: 100%;
    max-width: 500px;
    margin: auto;
    padding-bottom: 8rem;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
    display: block;
    margin: 0 auto;
`

const Page = ({ children }) => {
    return (
        <FullPage>
            <Header>
                <Logo src={logoSrc} width="256" height="256" alt="banktrack logo" />
            </Header>

            <Main>{children}</Main>
        </FullPage>
    );
}

export default Page

