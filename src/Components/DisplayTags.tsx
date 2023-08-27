import { MdAdd } from 'react-icons/md'
import { Show, Tag, TagLabel, TagRightIcon, useColorMode } from '@chakra-ui/react'
import { useGenre } from './Hooks/useGenre'
import { useChangeColorStore } from '../Zustand/useChangeColorStore'
import { TiTick } from 'react-icons/ti'
import { TagSkeleton } from './TagSkeleton'
import { useGenreStore } from '../Zustand/useGenresStore'


export const DisplayTags = () => {
    const { data: Genres, isLoading } = useGenre();
    const { colorMode } = useColorMode();
    const { isMovie } = useGenreStore();
    const { setId, StateId, setMovie, setTv } = useChangeColorStore();
    const Netflix = colorMode === 'dark' ? 'red' : 'Netflix';
    const skelyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    return (
        <Show above='md'>
            {
                Genres?.genres.map(({ id, name }) => (
                    <Tag
                        fontFamily={'ubuntu'}
                        onClick={() => {
                            setId(id);
                            if (isMovie) { setMovie(name, id) }
                            else { setTv(name, id) }
                        }}
                        bgColor={id === StateId ? '#CC0000' : undefined}
                        color={id === StateId ? 'white' : undefined}
                        cursor={'pointer'}
                        key={id}
                        colorScheme={StateId === id ? undefined : Netflix}
                        margin={1}
                        size={{ base: 'sm', md: 'md', lg: 'lg' }} variant={StateId === id ? undefined : 'outline'} >
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
