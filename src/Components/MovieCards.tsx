import { Box, Card, Heading, Image, Button } from '@chakra-ui/react';
import '../App.css'
import { useGenreStore } from '../Zustand/useGenresStore';
import { imageRequest } from '../Services/imageRequest';
import { Link } from 'react-router-dom';

interface Props {
  title?: string;
  name?: string;
  imageSrc: string;
  id: number;
}

export const MovieCards = ({ title, imageSrc, name, id }: Props) => {
  imageSrc = imageRequest(imageSrc);
  const isMovie = useGenreStore(s => s.isMovie);
  const genericTitle = isMovie ? title : name;

  return (
    <Card
      width={{ base: '100px', md: '160px', lg: '130px' }}
      height={{ base: '180px', md: '220px', lg: '190px' }}
      position={'relative'}
      overflow={'hidden'}
      style={{ transformStyle: 'preserve-3d' }}
      transition="transform 0.5s"
      _hover={{ transform: 'rotateY(180deg)' }}
    >
      <Image
        width={'100%'}
        height={'100%'}
        objectFit={'cover'}
        src={imageSrc}
        alt="Movie Poster"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(204, 0, 0, 0.9)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        transform="rotateY(180deg)"
        color="#F8DE22"
        padding={1}
        opacity={0}
        fontFamily={'ubuntu'}
        _hover={{ opacity: 1 }}
      >
        <Heading
          color={'white'}
          fontFamily={'montserrat'}
          fontWeight={'bolder'}
          fontSize="md">{genericTitle}</Heading>
        <Link to={`/details/${id}`} >
          <Button
            fontFamily={'montserrat'}
            size={'xs'}
            color={'white'}
            colorScheme={'whiteAlpha'}
            mt={1}
            borderRadius={'8px'}
            _hover={{}}
            onClick={() => console.log(id)}
          >
            View Details
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
