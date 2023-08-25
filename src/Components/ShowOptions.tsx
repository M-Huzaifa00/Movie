import { Box, HStack, Tag } from "@chakra-ui/react"
export const ShowOptions = () => {
    return (
        <Box
            display={'flex'} justifyContent={'flex-end'}
            paddingEnd={{ md: 12 }}
        >

            <HStack paddingX={{ base: 2 }} >
                <Tag bgColor={'#E50914'} color={'white'} >
                    Movie
                </Tag>
                <Tag bgColor={'#E50914'} color={'white'} >
                    TV
                </Tag>
            </HStack>
        </Box>
    )
}
