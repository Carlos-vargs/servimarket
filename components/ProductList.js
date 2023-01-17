import { Flex } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";

export default function ProductList({ products = [] }) {
  return (
    <Flex flexWrap="wrap" gridGap="30px" justifyContent="center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  );
}
