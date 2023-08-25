import { Box, HStack, Text } from "@chakra-ui/react"

export const NavBar = () => {
    return (
        <HStack  px={10} py={2}>
            <Text>Film <Box color={'yellow.300'} verticalAlign={'middle'}  fontSize={'30'} as="span">X</Box> Fusion</Text>
        </HStack>
    )
}
