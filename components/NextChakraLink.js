import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NextChakraLink({ href, children, boxShadow, ...rest }) {
  return (
    <NextLink href={href} passHref>
      <Link
        {...rest}
        textDecoration="none !important"
        boxShadow={boxShadow ? boxShadow : "none !important"}
      >
        {children}
      </Link>
    </NextLink>
  );
}
