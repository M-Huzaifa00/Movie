import { MdAdd } from 'react-icons/md'
import { Show, Tag, TagLabel, TagRightIcon, useColorMode } from '@chakra-ui/react'
import { useGenre } from './Hooks/useGenre'


export const DisplayTags = () => {
    const { data: Genres } = useGenre();
    const { colorMode } = useColorMode();
    const Netflix = colorMode === 'dark' ? 'red' : 'Netflix'

    return (
        <Show above='md'>
            {
                Genres?.genres.map(({ id, name }) => (
                    <Tag
                        key={id}
                        colorScheme={Netflix}
                        margin={1}
                        size={{ base: 'sm', md: 'md', lg: 'lg' }} variant='outline' >
                        <TagLabel
                        >{name}</TagLabel>
                        <TagRightIcon
                            fontSize={'20px'}
                            mt={1}
                        ><MdAdd /></TagRightIcon>
                    </Tag>
                ))
            }
        </Show>
    )
}
