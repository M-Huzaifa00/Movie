import { SimpleGrid } from '@chakra-ui/react'
import { MovieCards } from './MovieCards'
import { useMovies } from './Hooks/useMovies'

export const MovieGrid = () => {
  const { data: Movies } = useMovies();
  return (
    <SimpleGrid
      columns={{
        lg: 8,
        md: 4,
        base: 3
      }}
      px={{ base: 2, md: 14 }}
      mt={{ base: 2, md: 4 }}
      gap={{ base: 1, lg: 4 }}
    >
      {
        Movies?.results.map(({ id, poster_path, original_title }) => (
          <MovieCards key={id} title={original_title} imageSrc={poster_path} />
        ))

      }


    </SimpleGrid>
  )
}
