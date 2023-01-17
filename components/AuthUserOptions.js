import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import CustomSearchInput from "@components/CustomSearchInput";
import NextChakraLink from "@components/NextChakraLink";
import EllipsisIcon from "@icons/EllipsisIcon";
import { useSession } from "next-auth/react";

export default function AuthUserOptions({ userId }) {
  const { data: session } = useSession();

  const authOptions = [
    {
      name: "create company",
      url: {
        pathname: "/user/[id]/create-company",
        query: { id: userId },
      },
    },
    {
      name: "create service",
      url: "/company/create-service",
    },
  ];

  return (
    <Flex gridGap="20px" justifyContent="center" alignItems="center">
      <CustomSearchInput />
      <Popover>
        <PopoverTrigger>
          <Button variant="outline" padding="0">
            <EllipsisIcon />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent boxShadow="none !important" width="max-content">
            <PopoverArrow />
            <PopoverBody textTransform="capitalize" paddingInline={0}>
              {session?.user.id === userId &&
                authOptions.map((option, key) => (
                  <NextChakraLink
                    key={key}
                    display="block"
                    _hover={{ backgroundColor: "gray.100" }}
                    paddingInline={3}
                    href={option.url}
                  >
                    {option.name}
                  </NextChakraLink>
                ))}
              <NextChakraLink
                display="block"
                href="#"
                _hover={{ backgroundColor: "gray.100" }}
                paddingInline="3"
              >
                report
              </NextChakraLink>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}
