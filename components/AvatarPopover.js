import {
  Avatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";

export default function AvatarPopover({ handleSignOut, session }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          size="md"
          name={session?.user.name}
          title={session?.user.name}
          cursor="pointer"
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent boxShadow="none !important" width="max-content">
          <PopoverArrow />
          <PopoverBody
            textAlign="center"
            cursor="pointer"
            textTransform="capitalize"
            paddingInline={0}
          >
            <NextChakraLink
              display="block"
              _hover={{ backgroundColor: "gray.100" }}
              href={{
                pathname: "/user/[id]",
                query: { id: session?.user.id },
              }}
              paddingInline={3}
            >
              profile
            </NextChakraLink>
            <Text
              display="block"
              _hover={{ backgroundColor: "gray.100" }}
              onClick={handleSignOut}
              whiteSpace="nowrap"
              paddingInline={3}
            >
              log out
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
