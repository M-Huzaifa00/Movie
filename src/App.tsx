import { Grid, GridItem } from "@chakra-ui/react"
import { NavBar } from "./Components/NavBar"
import { GenreTag } from "./Components/GenreTag"
import { ShowOptions } from "./Components/ShowOptions"

function App() {

  return (
    <>
      <Grid templateAreas={
        `'NavBar' 'NavBar'
         "Genres"  "Genres"
         'Main'    'Main'
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
