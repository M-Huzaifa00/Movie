import { BsChevronCompactDown } from 'react-icons/bs'
import { useGenre } from './Hooks/useGenre'
import { TiTick } from 'react-icons/ti'
import { MdAdd } from 'react-icons/md'
import { Button, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react'
import { useGenreStore } from '../Zustand/useGenresStore'
import { useChangeColorStore } from '../Zustand/useChangeColorStore'

export const DisplayTagMob = () => {
    const { data: Genres } = useGenre()
    const { isMovie } = useGenreStore();
    const { setMovie , setTv , setId , StateId} = useChangeColorStore();

    return (
        <Show below='sm' >
            <Menu>
                <MenuButton
                width={'80px'}
                height={'30px'}
                color={'white'}
                 bgColor={'#E50914'} as={Button} rightIcon={<BsChevronCompactDown fontSize={'20px'}/>}>
                 List
                </MenuButton>
                <MenuList>
                    {
                        Genres?.genres.map(({ id, name }) => (
                            <MenuItem
                                onClick={()=>{
                                    setId(id)
                                    if(isMovie){setMovie(name)}
                                    else{setTv(name)}
                                }}
                                bgColor={id===StateId ? '#E50914' : undefined}
                                cursor={'pointer'}
                                icon={ id === StateId ? <TiTick /> : <MdAdd />}
                                key={id} >
                                {name}
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Show>
    )
}
