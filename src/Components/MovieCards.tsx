import { Box, Card, Heading, Image, Button } from '@chakra-ui/react';
import { useGenreStore } from '../Zustand/useGenresStore';
import { imageRequest } from '../Services/imageRequest';
interface Props {
  title?: string;
  name?: string;
  imageSrc: string;
}

export const MovieCards = ({ title, imageSrc, name }: Props) => {
  imageSrc = imageRequest(imageSrc);
  console.log(imageSrc)
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
        backgroundColor="rgba(0, 0, 0, 0.9)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        transform="rotateY(180deg)"
        color="white"
        padding={1}
        opacity={0}
        transition="opacity 0.3s, filter 0.3s"
        _hover={{ opacity: 1, color: 'white', }}
      >
        <Heading fontSize="12px">{genericTitle}</Heading>
        <Button
          bgColor="#E50914"
          fontSize={{ base: '12px', md: '15px' }}
          width="80%"
          height="20px"
          color={'white'}
          mt={1}
          _hover={{}}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};
