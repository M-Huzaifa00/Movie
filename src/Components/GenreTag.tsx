import { Box, Heading } from '@chakra-ui/react'
import { ShowOptions } from './ShowOptions'
import { DisplayTags } from './DisplayTags'
import { DisplayTagMob } from './DisplayTagMob'
export const GenreTag = () => {
    return (
        <Box display={'flex'}>
            <Box>
                <Box
                    paddingX={{ base: 3, md: 14 }}
                    display={'inline-block'}
                >

                    <Heading
                        fontSize={{ base: '30px', md: '3xl' }}
                    >Genres</Heading>
                </Box>
                <Box width={{ base: '100%' }}
                    paddingX={{ base: 2, md: 14 }}
                    pt={2}
                >
                    <DisplayTags />
                    <DisplayTagMob />
                </Box>
            </Box>
            <Box width={'100%'} >
                <ShowOptions />
            </Box>
        </Box>
    )
}

