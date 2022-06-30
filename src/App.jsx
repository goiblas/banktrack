import GlobalSyles from "./components/GlobalStyles"
import Page from "./components/Page"
import Card from "./components/Card"

const App = () => {
  return (
    <>
    <GlobalSyles />

    <Page>
      <Card>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate quia dolor qui fugit! Sunt quae reiciendis nobis voluptas minus in possimus dolor quibusdam, eligendi eum. Placeat commodi vero labore.</p>
      </Card>

      <Card contentWith={280}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate quia dolor qui fugit! Sunt quae reiciendis nobis voluptas minus in possimus dolor quibusdam, eligendi eum. Placeat commodi vero labore.</p>
      </Card>
    </Page>
    </>
  )
}

export default App
