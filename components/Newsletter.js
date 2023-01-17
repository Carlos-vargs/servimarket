import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import CustomInput from "@components/CustomInput";
import EnvelopeIcon from "@icons/EnvelopeIcon";
import { useFormik } from "formik";

export default function Newsletter({ variant }) {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("sending email to:", values.email);
    },
  });

  return (
    <>
      {variant !== "input" ? (
        <VStack
          as="form"
          onSubmit={formik.handleSubmit}
          alignItems="flex-start"
          spacing="20px"
        >
          <Heading as="h4" fontSize="24px">
            newsletter
          </Heading>
          <CustomInput
            placeholder="Enter Your Email"
            type="email"
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Button
            leftIcon={<EnvelopeIcon />}
            type="submit"
            alignSelf={["flex-end", "flex-start"]}
          >
            signup now
          </Button>
        </VStack>
      ) : (
        <Flex
          onSubmit={formik.handleSubmit}
          border="1px solid #585c75"
          backgroundColor="base"
          position="relative"
          borderRadius="50px"
          maxWidth="690px"
          height="56px"
          width="full"
          as="form"
        >
          <CustomInput
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email here"
            autoComplete="email"
            borderRadius="50px"
            withTitle={false}
            border="none"
            height="full"
            width="full"
            name="email"
            type="email"
            required
          />
          <Button
            _focus={{ boxShadow: "none" }}
            position="absolute"
            type="submit"
            height="full"
            width="54px"
            padding="0"
            zIndex={2}
            right="-1px"
          >
            <EnvelopeIcon />
          </Button>
        </Flex>
      )}
    </>
  );
}
