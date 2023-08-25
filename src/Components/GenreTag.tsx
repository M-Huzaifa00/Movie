import { Box, Heading, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'
import { useColorMode } from '@chakra-ui/react'
import { ShowOptions } from './ShowOptions'
const Genres = [
    { id: 1, genres: 'Horror' },
    { id: 2, genres: 'Comedy' },
    { id: 3, genres: 'Science fiction' },
    { id: 4, genres: 'Drama' },
    { id: 5, genres: 'DramaAlly' }

]


export const GenreTag = () => {
    const { colorMode } = useColorMode();
    const Netflix = colorMode === 'dark' ? 'red' : 'Netflix'
    return (
        <Box display={'flex'}>
            <Box>
                <Box
                    paddingX={{ base: 3, md: 14 }}
                    display={'inline-block'}
                >

                    <Heading
                        fontSize={{ base: '20px', md: '3xl' }}
                    >Genres</Heading>
                </Box>
                <Box width={{ base: '100%' }}
                    paddingX={{ base: 2, md: 14 }}
                    pt={2}

                >
                    {
                        Genres.map((tag) => (
                            <Tag
                                colorScheme={Netflix}
                                margin={1}
                                size={{ base: 'sm', md: 'md', lg: 'lg' }} key={tag.id} variant='outline' >
                                <TagLabel
                                >{tag.genres}</TagLabel>
                                <TagRightIcon
                                    fontSize={'20px'}
                                    mt={1}
                                ><MdAdd /></TagRightIcon>
                            </Tag>
                        ))
                    }
                </Box>
            </Box>
            <Box width={'100%'} >
                <ShowOptions />
            </Box>
        </Box>
    )
}

