import { Box, GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useMovieDetail } from '../Components/Hooks/useMovieDetail'
import { DefinationItem } from './DefinationItem';
import { useMovieVideos } from './Hooks/useMovieVideos';

interface Props {
    id: number;
}

export const MovieDetailPage = ({ id }: Props) => {
    const { data: Movie, isLoading, error } = useMovieDetail(id)
    const { data } = useMovieVideos(id)
    const result = data?.results.find(({ type, name }) => {
        return type === 'Trailer' && name === 'Official Trailer';
    });
    console.log(result?.key)

    const uniquerCountries = [...new Set(Movie?.production_countries)]
    if (error) throw Error;
    if (isLoading) return <Box marginTop={90} display={'flex'} justifyContent={'center'} ><Spinner /></Box>;


    return (
        <SimpleGrid fontFamily={'ubuntu'} paddingX={{ md: 14 }} padding={4} columns={{ base: 1, md: 2 }} >
            <GridItem >
                <Heading
                    color={'#E50914'}
                >
                    {Movie?.original_title}
                </Heading>
                <Text>
                    {
                        Movie?.overview
                    }
                </Text>
                <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} as='dl'>
                    <DefinationItem term={'Genres'}>
                        {
                            Movie?.genres.map(({ id, name }) => <Text key={id} >{name}</Text>)
                        }
                    </DefinationItem>
                    <DefinationItem term={'Production'}>
                        {
                            Movie?.production_companies.map(({ id, name }) => <Text key={id} >{name}</Text>)
                        }
                    </DefinationItem>
                    <DefinationItem term={'Countries'}>
                        {
                            uniquerCountries.map(({ name }) => <Text key={name} >{name}</Text>)
                        }
                    </DefinationItem>
                    <DefinationItem term='Status'>
                        <Text>{Movie?.status}</Text>
                    </DefinationItem>
                    <DefinationItem term="Budget">
                        {
                            <Text>
                                {Movie?.budget ? Movie?.budget : 'Unknown'}
                            </Text>
                        }
                    </DefinationItem>
                    <DefinationItem term="Release Date">
                        {
                            <Text>
                                {Movie?.release_date}
                            </Text>
                        }
                    </DefinationItem>
                </SimpleGrid>
            </GridItem>
            <GridItem display={'flex'} justifyContent={'center'} padding={{ lg: 4 }} >
                <iframe
                    style={{ margin: 'auto' }}
                    src={`https://www.youtube.com/embed/${result?.key}`}
                    title="Embedded Video"
                    allowFullScreen
                    width="100%"  // 
                    height="300" //
                ></iframe>

            </GridItem>

        </SimpleGrid>
    )
}
