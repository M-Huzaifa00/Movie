import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react'
import { useFormStore } from '../Zustand/useFormStore'
import { useGenreStore } from "../Zustand/useGenresStore"
import { useNavigate } from 'react-router-dom'


export const SearchBar = () => {
    const navigate = useNavigate()
    const ref = useRef<HTMLInputElement>(null)
    const { setData , setBack } = useFormStore();
    const isMovie = useGenreStore(s => s.isMovie)
    const placeholder = isMovie ? 'Search Movies....' : 'Search TV Shows...'  ;
    return (
        <form style={{ width: '100%' }}
            onSubmit={(e) => {
                e.preventDefault()
                navigate('/')
            }}
        >
            <InputGroup
            fontFamily={'montserrat'}
            fontWeight={'bold'}
            >
                <InputLeftElement children={<BsSearch />} />
                <Input
                onChange={()=>{
                    if(ref.current){ setData(ref.current.value) }
                    if(ref.current?.value.length === 0 ){
                        setBack()
                    }
                }} 
                
                 ref={ref} borderRadius={20} placeholder={placeholder} variant={'filled'} />
            </InputGroup>
        </form>
    )
}