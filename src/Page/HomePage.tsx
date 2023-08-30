import { Grid, GridItem } from "@chakra-ui/react"
import { GenreTag } from "../Components/GenreTag"
import { MovieGrid } from "../Components/MovieGrid"
export const HomePage = () => {
    return (
        <>
            <Grid scrollBehavior={'smooth'} templateAreas={
                ` 'Genres'  'Genres'
         'Main'    'Main'
      `
            }
            >
                <GridItem area={'Genres'}>
                    <GenreTag />
                </GridItem>
                <GridItem area='Main'>
                    <MovieGrid />
                </GridItem>
            </Grid>
        </>
    )
}
