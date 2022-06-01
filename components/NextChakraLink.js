import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

function NextChakraLink({ href, children, ...rest }) {
    return (
        <NextLink
            href={href}
            passHref
        >
            <Link
                {...rest}
                textDecoration="none !important"
                boxShadow="none !important"
            >
                {children}
            </Link>
        </NextLink>
    );
}

export default NextChakraLink;