import fixErrorsMessage from "@components/fixErrorsMessage";
import CustomTextTarea from "@components/CustomTextTarea";
import CustomInput from "@components/CustomInput";
import { Button, VStack } from "@chakra-ui/react";
import { gql, request } from "graphql-request";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SaveIcon from "@icons/SaveIcon";
import { useFormik } from "formik";
import MultiSelect from "@components/MultiSelect";

export default function ServiceForm({companies}) {

    const router = useRouter()

    const { data: session } = useSession()

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            company_id: '',
        },
        onSubmit: async input => {

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
                        input
                    },
                    {
                        'Authorization': `Bearer ${session.token}`,
                    }
                )

                router.push(`/company/${formik.values.company_id}`)

            } catch ({ response: { errors } }) {

                formik.setErrors(fixErrorsMessage(errors[0].extensions.validation))

            }
        },
    })

    return (
        <VStack
            as="form"
            width="full"
            height="full"
            color="white"
            spacing="38px"
            maxWidth="1073px"
            marginInline="auto"
            paddingBlock="40px"
            borderRadius="12px"
            alignContent="flex-start"
            backgroundColor="base_ligth"
            onSubmit={formik.handleSubmit}
            paddingInline={['20px', '20px', '40px', '40px', '40px',]}
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
                name="company_id"
                data={companies}
                title="Companies"
                placeholder="Select company"
                value={formik.values.company_id}
                errors={formik.errors.company_id}
                onChange={(company) => formik.setFieldValue('company_id', company?.value)}
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