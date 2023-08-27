import { SimpleGrid } from '@chakra-ui/react'
import { MovieCards } from './MovieCards'
import { useMovies } from './Hooks/useMovies'
import { CardSkeleton } from './CardSkeleton';

export const MovieGrid = () => {
  const test = [1,2,3,4,5,6,7,8,9,10,11];

  const { data: Movies , isLoading } = useMovies();
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
         isLoading && test.map((id) => <CardSkeleton key={id} />)
      }
      {
        Movies?.results.map(({ id, poster_path, original_title,name }) => (
          <MovieCards key={id} title={original_title} name={name}  imageSrc={poster_path} />
        ))

      }


    </SimpleGrid>
  )
}
