import logoSrc from "../assets/bt-icon.png"
import styled from "@emotion/styled";

const FullPage = styled.div`
    min-height: 100vh;
    padding: 0 1.5rem;
    display: flex;
    background-color: #FDFAF5;
`

const Content = styled.div`
    margin: auto;
    flex: 1 1 auto;
`

const Header = styled.header`
    padding: 4rem 0;
`

const Main = styled.main`
    width: min(31.25rem, 100%);
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
            <Content>
                <Header>
                    <Logo src={logoSrc} width="256" height="256" alt="banktrack logo" />
                </Header>

                <Main>{children}</Main>
            </Content>
        </FullPage>
    );
}

export default Page

