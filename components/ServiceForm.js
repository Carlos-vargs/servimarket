import fixErrorsMessage from "@utils/fixErrorsMessage";
import CustomTextTarea from "@components/CustomTextTarea";
import CustomInput from "@components/CustomInput";
import { Button, VStack } from "@chakra-ui/react";
import { gql, request } from "graphql-request";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SaveIcon from "@icons/SaveIcon";
import { useFormik } from "formik";
import MultiSelect from "@components/MultiSelect";

export default function ServiceForm({ companies }) {
  const router = useRouter();

  const { data: session } = useSession();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      companyId: "",
    },
    onSubmit: async (input) => {
      try {
        await request(
          process.env.NEXT_PUBLIC_GRAPHQL_URL,
          gql`
            mutation createProduct($input: CreateProductInput!) {
              createProduct(input: $input) {
                id
                name
                description
              }
            }
          `,
          {
            input,
          },
          {
            Authorization: `Bearer ${session.token}`,
          }
        );

        router.push({
          pathname: "/company/[id]",
          query: { id: formik.values.companyId },
        });
      } catch ({ response: { errors } }) {
        formik.setErrors(fixErrorsMessage(errors[0].extensions.validation));
      }
    },
  });

  return (
    <VStack
      as="form"
      width="full"
      height="full"
      color="white"
      spacing="38px"
      paddingBlock="40px"
      borderRadius="12px"
      alignItems="center"
      alignContent="flex-start"
      backgroundColor="base_ligth"
      onSubmit={formik.handleSubmit}
      paddingInline={["20px", "20px", "40px", "40px", "40px"]}
    >
      <CustomInput
        required
        name="name"
        title="name"
        placeholder="name"
        value={formik.values.name}
        errors={formik.errors.name}
        onChange={formik.handleChange}
      />
      <MultiSelect
        required
        isClearable
        name="companyId"
        data={companies}
        title="Company"
        placeholder="Select company"
        value={formik.values.companyId}
        errors={formik.errors.companyId}
        onChange={(company) =>
          formik.setFieldValue("companyId", company?.value)
        }
      />
      <CustomTextTarea
        required
        name="description"
        title="description"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
        errors={formik.errors.description}
      />
      <Button
        type="submit"
        alignSelf="flex-end"
        leftIcon={<SaveIcon />}
        disabled={Object.entries(formik.errors).length !== 0}
        marginBlockStart="44px !important"
      >
        create now
      </Button>
    </VStack>
  );
}
