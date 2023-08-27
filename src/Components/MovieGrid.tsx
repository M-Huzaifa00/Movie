import { SimpleGrid , Text } from '@chakra-ui/react'
import { MovieCards } from './MovieCards'
import { useMovies } from './Hooks/useMovies'
import { CardSkeleton } from './CardSkeleton';
import { useFormStore } from '../Zustand/useFormStore';
import { useForms } from './Hooks/useForm';

export const MovieGrid = () => {
  const { displayNormal, displaySearch } = useFormStore();
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const { data: Form , error} = useForms();
  const { data: Movies, isLoading } = useMovies();
  if(error){ return <Text>{error.message}</Text> }
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
        displayNormal &&
        Movies?.results.map(({ id, poster_path, original_title, name }) => (
          <MovieCards key={id} title={original_title} name={name} imageSrc={poster_path} />
        ))

      }
      {
        displaySearch &&
        Form?.results.map(({ id, poster_path, original_title, name }) => (
          <MovieCards key={id} title={original_title} name={name} imageSrc={poster_path} />
        ))
      }


    </SimpleGrid>
  )
}
