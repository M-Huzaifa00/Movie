import { Skeleton , SkeletonText, Tag } from '@chakra-ui/react'

export const TagSkeleton = () => {
  return (
    <Tag width={'200px'} height={'40px'} margin={2} >
        <Skeleton>
            <SkeletonText fontSize={'16px'} >
            </SkeletonText>
        </Skeleton>
    </Tag>
  )
}
