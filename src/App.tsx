import { Grid, GridItem } from "@chakra-ui/react"
import { NavBar } from "./Components/NavBar"
import { GenreTag } from "./Components/GenreTag"

function App() {

  return (
    <>
      <Grid templateAreas={
        `'NavBar' 'NavBar'
         'Genres' 'Dynamic'
          'Main''Main'
      `
      }
      >
        <GridItem area={'NavBar'}>
          <NavBar/>
        </GridItem>
        <GridItem area={'Genres'}>
          <GenreTag/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
