import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Icon, useColorMode } from '@chakra-ui/react'
export const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Icon
        boxSize={{ base:5 , md:30}}
         onClick={toggleColorMode} >
            {colorMode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </Icon>
    )
}
