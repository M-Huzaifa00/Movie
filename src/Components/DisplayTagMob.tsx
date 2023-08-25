import { BsChevronCompactDown } from 'react-icons/bs'
import { useGenre } from './Hooks/useGenre'
import { MdAdd } from 'react-icons/md'
import { Button, Menu, MenuButton, MenuItem, MenuList, Show } from '@chakra-ui/react'

export const DisplayTagMob = () => {
    const { data: Genres } = useGenre()
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
                                cursor={'pointer'}
                                icon={<MdAdd/>}
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
