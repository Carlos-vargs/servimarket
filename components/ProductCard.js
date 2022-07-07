import { Avatar, AvatarGroup, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import StarIcon from "@icons/StarIcon";
import defaultCompanyCover from "@images/default-cover.png";
import FormRating from "@components/FormRating";

export default function ProductCard({ product }) {

    return (
        <Stack
            color="white"
            maxWidth={['286px', '286px', '286px', '300px', '300px']}
            height="400px"
            borderRadius="20px"
            position="relative"
            backgroundColor="base_ligth"
            justifyContent="space-between"
        >
            <Image src={defaultCompanyCover.src} alignSelf="flex-start" />
            <Stack alignItems="flex-start" px="26px" >
                {
                    product.rating.length !== 0 && <AvatarGroup
                        bottom="calc(50% + 4px)"
                        position="absolute"
                        left="26px"
                        size='sm'
                        max={2}
                    >
                        {
                            product.rating.map(({ user }) =>
                                <Avatar key={user.id} cursor="pointer" borderWidth="none" name={user.name} title={user.name} />
                            )
                        }
                    </AvatarGroup>
                }
                <Heading as="h5" fontSize="18px" textTransform="capitalize">{product.name}</Heading>
                <Text noOfLines={1}>{product.description || "no description available"}</Text>
                <FormRating productId={product.id} />
            </Stack>
            <Flex
                width="full"
                borderBlockStart="1px solid rgba(255,255,255,.15)"
                padding="20px 26px"
                alignItems="flex-start"
                justifyContent="space-between"
            >
                <Flex justifyContent="center" alignItems="center" cursor="pointer" title={`${product.rating.length} opinions`} >
                    <StarIcon color="#eee966" />
                    <Text as="span" fontSize="14px" lineHeight="none" >{product.avg?.toFixed(1) || 0}</Text>
                </Flex>
                <Button variant="outline" maxWidth="130px">get service</Button>
            </Flex>
        </Stack>
    );
}