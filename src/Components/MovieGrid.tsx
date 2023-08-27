import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import { MovieCards } from './MovieCards'
import { useMovies } from './Hooks/useMovies'
import { CardSkeleton } from './CardSkeleton';
import { useFormStore } from '../Zustand/useFormStore';
import { useForms } from './Hooks/useForm';
import InfiniteScroll from "react-infinite-scroll-component";

export const MovieGrid = () => {
  const { displayNormal, displaySearch } = useFormStore();
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const { data: Form, error } = useForms();
  const { data: Movies, hasNextPage, isLoading, fetchNextPage } = useMovies();
  const fetchTotal = Movies?.pages.reduce((total, page) => total + page.results.length, 0) || 0
  if (error) { return <Text>{error.message}</Text> }
  return (
    <InfiniteScroll dataLength={fetchTotal}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingX={{ base: 4, md: 14 }}
        paddingY={{ base: 2, md: 6 }} >
        <Spinner color='#CC0000' />
      </Box>}
    >
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
          Movies?.pages.map((result) => (
            result.results.map(({ id, poster_path, original_title, name }) => (
              <MovieCards key={id} title={original_title} name={name} imageSrc={poster_path} />
            ))
          ))

        }
        {
          displaySearch &&
          Form?.results.map(({ id, poster_path, original_title, name }) => (
            <MovieCards key={id} title={original_title} name={name} imageSrc={poster_path} />
          ))
        }


      </SimpleGrid>
    </InfiniteScroll>
  )
}
