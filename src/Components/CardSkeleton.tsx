import { Skeleton , Card , CardBody , SkeletonText } from '@chakra-ui/react'
export const CardSkeleton = () => {
  return (
    <Card
    width={{ base: '100px', md: '160px', lg: '130px' }}
    height={{ base: '180px', md: '220px', lg: '190px' }}
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}
