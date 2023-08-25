import { Box, HStack, Text, useColorMode } from "@chakra-ui/react"
import { ColorMode } from "./ColorMode"

export const NavBar = () => {
    return (
        <HStack
            display={'flex'} justifyContent={'space-between'}
            fontWeight={'400'}
            letterSpacing={{ base: -1, md: 2 }}
            px={{ base: 2, md: 14 }} py={{ base: 1, md: 2 }}>
            <Text fontSize={{ md: '2xl' }}
            >Film<Box color={'yellow.300'} verticalAlign={'middle'} fontSize={'30'} as="span"
            >X</Box>
                Fusion</Text>
            <ColorMode />
        </HStack>
    )
}
