import { Box, Card, Heading, Image, Button } from '@chakra-ui/react';
interface Props {
  title: string;
  imageSrc: string;
}

export const MovieCards = ({ title, imageSrc }: Props) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";
  const imageURL = `${baseImageUrl}${imageSize}${imageSrc}`;

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
        src={imageURL}
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
        _hover={{ opacity: 1, color: 'white',  }}
      >
        <Heading fontSize="12px">{title}</Heading>
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
