import { Box, HStack, Text } from "@chakra-ui/react"
import { ColorMode } from "./ColorMode"
import { SearchBar } from "./SearchBar"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <HStack
            display={'flex'} justifyContent={'space-between'}
            fontWeight={'400'}
            letterSpacing={{ base: -1, md: 2 }}
            px={{ base: 2, md: 14 }} py={{ base: 1, md: 2 }}>
            <Link to='/'>
                <Text fontSize={{ md: '2xl' }}
                    fontFamily={'Rock Salt'}
                    fontWeight={'normal'}
                >Film<Box color={'#E50914'} verticalAlign={'middle'} fontSize={'30'} as="span"
                >X</Box>
                    Fusion
                </Text>
            </Link>
            <SearchBar />
            <ColorMode />
        </HStack>
    )
}
