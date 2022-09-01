import { Avatar, AvatarGroup, Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import defaultCompanyCover from "@images/default-cover.png";
import FormRating from "@components/FormRating";
import StarIcon from "@icons/StarIcon";
import { useState } from "react";

export default function ProductCard({ product }) {

    const [ratings, setRatings] = useState([...product.usersRated])
    const [productAvg, setProductAvg] = useState(product.avg)

    return (
        <Stack
            color="white"
            height="400px"
            maxWidth="300px"
            position="relative"
            borderRadius="20px"
            backgroundColor="base_ligth"
            justifyContent="space-between"
        >
            <Box as="picture" overflow="hidden" borderTopRadius="20px">
                <Image
                    transform="scale(1)"
                    alignSelf="flex-start"
                    alt="default background"
                    src={defaultCompanyCover.src}
                    transition="all .5s ease-in-out"
                    _hover={{ transform: "scale(1.05)" }}
                />
            </Box>
            <Stack alignItems="center" paddingInline="26px">
                {
                    ratings.length !== 0 && <AvatarGroup
                        bottom="calc(50% + 4px)"
                        position="absolute"
                        left="26px"
                        size='sm'
                        max={2}
                    >
                        {
                            ratings.map((rating) =>
                                <Avatar key={rating.id} cursor="pointer" borderWidth="none" name={rating.name} title={rating.name} />
                            )
                        }
                    </AvatarGroup>
                }
                <Heading as="h5" fontSize="18px" textTransform="capitalize" title={product.name}  noOfLines={1}>{product.name}</Heading>
                <Text noOfLines={1}>{product.description || "no description available"}</Text>
                <FormRating
                    productId={product.id}
                    setRatings={setRatings}
                    hasRated={product.hasRated}
                    setProductAvg={setProductAvg}
                />
            </Stack>
            <Flex
                width="full"
                padding="20px 26px"
                alignItems="flex-start"
                justifyContent="space-between"
                borderBlockStart="1px solid rgba(255,255,255,.15)"
            >
                <Flex justifyContent="center" alignItems="center" cursor="pointer" title={`${ratings.length} opinions`} >
                    <StarIcon color="#eee966" />
                    <Text as="span" fontSize="14px" lineHeight="none">{productAvg?.toFixed(1) || 0}</Text>
                </Flex>
                <Button variant="outline" maxWidth="130px">get service</Button>
            </Flex>
        </Stack>
    );
}