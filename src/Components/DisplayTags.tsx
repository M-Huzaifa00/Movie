import { MdAdd } from 'react-icons/md'
import { Show, Tag, TagLabel, TagRightIcon, useColorMode } from '@chakra-ui/react'
import { useGenre } from './Hooks/useGenre'
import { useChangeColorStore } from '../Zustand/useChangeColorStore'
import { TiTick } from 'react-icons/ti'
import { TagSkeleton } from './TagSkeleton'


export const DisplayTags = () => {
    const { data: Genres , isLoading } = useGenre();
    const { colorMode } = useColorMode();
    const { color, bg, setStyles, setId, StateId } = useChangeColorStore();
    const Netflix = colorMode === 'dark' ? 'red' : 'Netflix';
    const skelyArr = [1,2,3,4,5,6,7,8,9]
    

    return (
        <Show above='md'>
            {
                Genres?.genres.map(({ id, name }) => (
                    <Tag
                        onClick={() => {
                            setId(id);
                            setStyles();

                        }}
                        bgColor={id === StateId ? bg : undefined}
                        color={id === StateId ? color : undefined}
                        cursor={'pointer'}
                        key={id}
                        colorScheme={Netflix}
                        margin={1}
                        size={{ base: 'sm', md: 'md', lg: 'lg' }} variant='outline' >
                        <TagLabel
                        >{name}</TagLabel>
                        <TagRightIcon
                            fontSize={'20px'}
                            mt={1}
                        >
                            {id === StateId ? <TiTick /> : <MdAdd />}
                        </TagRightIcon>
                    </Tag>
                ))
            }
            {
                isLoading && 
                skelyArr.map((id) => <TagSkeleton key={id} />)
            }
        </Show>
    )
}
