import { Grid, GridItem } from "@chakra-ui/react"
import { NavBar } from "./Components/NavBar"

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

      </Grid>
    </>
  )
}

export default App
