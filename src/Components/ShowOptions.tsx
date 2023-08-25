import { Box, HStack, Tag, Text } from "@chakra-ui/react"
import { useGenreStore } from "../Zustand/useGenresStore"
import { useChangeColorStore } from "../Zustand/useChangeColorStore";
export const ShowOptions = () => {
    const { onClickMovie, onClickTV, isMovie } = useGenreStore();
    const { MovieName, TVName } = useChangeColorStore()
    return (
        <Box
            height={'100%'}
            width={'100%'}

            paddingEnd={{ md: 12 }}
        >
            <HStack
                display={'flex'} justifyContent={'flex-end'}
                alignItems={'flex-start'}
                paddingX={{ base: 2 }}
            >
                <Tag
                    onClick={onClickMovie}
                    cursor={'pointer'}
                    bgColor={'#E50914'}
                    color={'white'} >
                    Movie
                </Tag>
                <Tag
                    onClick={onClickTV}
                    cursor={'pointer'}
                    bgColor={'#E50914'}
                    color={'white'} >
                    TV
                </Tag>
            </HStack>
            <Text
                textAlign={{ base: 'end', md: 'center' }}
                fontSize={{ base: '15px', lg: '2xl' }}
                padding={{ lg: 2 }}
                mt={{ base: 5, md: 20, lg: 14 }}
                ms={{ md: 12, lg: 4 }}
                pe={{ base: 4, md: 0 }}
                borderBottom={{ md: '1px solid red' }}
            >
                {
                    isMovie ? `${MovieName || ''} Movies` : `${TVName || ''} TV Shows`
                }
            </Text>

        </Box>
    )
}
