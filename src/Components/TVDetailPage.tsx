import { Image, Heading, Text, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useTVDetails } from './Hooks/useTVDetails'
import { DefinationItem } from './DefinationItem';
import { useTVImages } from './Hooks/useTVImages';
import { imageRequest } from '../Services/imageRequest';
interface Props {
    id: number;
}

export const TVDetailPage = ({ id }: Props) => {
    const { data: TVDETAIL } = useTVDetails(id);
    const { data } = useTVImages(id);
    return (
        <>
            <SimpleGrid fontFamily={'ubuntu'} padding={{ base: 2, md: 4 }} paddingX={{ base: 2, md: 14 }} >
                <GridItem>
                    <Heading
                        color={'#E50914'}

                    >{TVDETAIL?.original_name}</Heading>
                    <Text>{TVDETAIL?.overview}</Text>
                    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} as='dl'>
                        <DefinationItem term='Genre'>
                            {
                                TVDETAIL?.genres.map(({ id, name }) => <Text key={id} >{name}</Text>)

                            }
                        </DefinationItem>
                        <DefinationItem term='Production'>
                            {
                                TVDETAIL?.production_companies.map(({ id, name }) => <Text key={id} >{name}</Text>)

                            }
                        </DefinationItem>
                        <DefinationItem term='On Air Date'>
                            {
                                <Text>{TVDETAIL?.first_air_date}</Text>

                            }
                        </DefinationItem>
                        <DefinationItem term='Status'>
                            {
                                <Text>{TVDETAIL?.status}</Text>

                            }
                        </DefinationItem>
                        <DefinationItem term='Total Seasons'>
                            {
                                <Text>{TVDETAIL?.number_of_seasons}</Text>
                            }
                        </DefinationItem>
                        <DefinationItem term='Total Episodes'>
                            {
                                <Text>{TVDETAIL?.number_of_episodes}</Text>
                            }
                        </DefinationItem>
                    </SimpleGrid>
                </GridItem>
            </SimpleGrid>
            <SimpleGrid padding={{ base: 2, md: 8 }} columns={{ base: 2, md: 6 }} spacing={2}>
                {
                    data?.backdrops.map(({ file_path }) => <Image src={imageRequest(file_path)} />)
                }
            </SimpleGrid>
        </>
    )
}