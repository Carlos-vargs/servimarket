import { Flex, Heading } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";

export default function ProductList({ products = [] }) {
    return (
        <>
            {
                products.length !== 0 && <Flex
                    justifyContent={['center', 'center', 'center', 'flex-start', 'flex-start',]}
                    gridGap={['20px', '20px', '20px', '30px', '30px']}
                    alignItems="flex-start"
                    maxWidth="630px"
                    flexWrap="wrap"
                    color="white"
                >
                    <Heading as="h3"
                        w="full"
                        fontSize="30px"
                        textTransform="capitalize"
                        display={['block', 'block', 'block', 'block', 'none']}
                        textAlign={['center', 'center', 'center', 'center', 'left']}
                    >
                        services
                    </Heading>
                    {
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </Flex>
            }
        </>
    );
}
