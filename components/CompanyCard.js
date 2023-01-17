import { Stack, Heading, Image, Text, Avatar } from "@chakra-ui/react";
import defaultCompanyCover from "@images/default-cover.png";
import NextChakraLink from "@components/NextChakraLink";

export default function CompanyCard({ company }) {
  return (
    <NextChakraLink
      href={{
        pathname: "/company/[id]",
        query: { id: company.id },
      }}
    >
      <Stack
        color="rgba(255,255,255,.66)"
        backgroundColor="base_ligth"
        borderRadius="20px"
        position="relative"
        overflow="hidden"
        cursor="pointer"
        textAlign="center"
        gridGap="64px"
        maxWidth="300px"
        paddingBlockEnd="20px"
        height="330px"
        width="full"
        _hover={{
          "&>div:first-of-type": { transform: "translate(-50%, 110px)" },
        }}
      >
        <Image src={defaultCompanyCover.src} alt="default background" />
        <Stack
          transition="all .3s ease-in-out"
          transform="translate(-50%, 116px)"
          textTransform="capitalize"
          position="absolute"
          borderRadius="12px"
          alignItems="center"
          margin="0 !important"
          backgroundColor="base"
          left="50%"
          width="240px"
          height="120px"
        >
          <Avatar name={company.name} size="lg" marginBlockStart="-30px" />
          <Heading
            as="h5"
            fontSize="18px"
            color="white"
            noOfLines={1}
            paddingInline="12px"
            title={company.name}
          >
            {company.name}
          </Heading>
          <Heading as="h6" fontSize="14px" fontWeight="400">
            {company.productCount !== 0 ? (
              <>
                available services{" "}
                <Text as="span" color="base_pink">
                  {company.productCount}
                </Text>
              </>
            ) : (
              "no services"
            )}
          </Heading>
        </Stack>
        <Stack paddingInline="24px" noOfLines={2}>
          {company.description ? (
            <Text title={company.description}>{company.description}</Text>
          ) : (
            <Text textTransform="capitalize">no description available</Text>
          )}
        </Stack>
      </Stack>
    </NextChakraLink>
  );
}
