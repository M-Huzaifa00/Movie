import { Grid } from "@chakra-ui/react"

function App() {

  return (
    <>
    <Grid templateAreas={
      `'NavBar' 'NavBar'
      'Genres' 'Dynamic'
      'Main''Main'
      `
    }
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}
    >

    </Grid>
    </>
  )
}

export default App
