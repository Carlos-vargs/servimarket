import fixErrorsMessage from "@components/fixErrorsMessage";
import CustomTextTarea from "@components/CustomTextTarea";
import { Button, VStack } from "@chakra-ui/react";
import CustomInput from "@components/CustomInput";
import MultiSelect from "@components/MultiSelect";
import { gql, request } from "graphql-request";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SaveIcon from "@icons/SaveIcon";
import { useFormik } from "formik";

export default function CompanyForm({ categories = [] }) {

    const router = useRouter()

    const { data: session } = useSession()

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            categories: {
                sync: []
            }
        },
        onSubmit: async values => {

            const input = {}
            input.name = values.name

            if (values.description !== '') {

                input.description = values.description

            }

            if (values.categories.sync.length !== 0) {

                input.categories = values.categories

            }

            try {
                await request(
                    process.env.NEXT_PUBLIC_GRAPHQL_URL,
                    gql`
                        mutation createCompany($input: CreateCompanyInput!) {
                            createCompany(input: $input) {
                                id
                                name
                                description
                                categories{
                                    id
                                    name
                                }
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

                router.push(`/user/${session.user.id}`)

            } catch ({ response: { errors } }) {

                const errorsBag = fixErrorsMessage(errors[0].extensions.validation)

                formik.setErrors(...errorsBag)

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
                name="categories"
                data={categories}
                title="categories"
                placeholder="categories"
                errors={formik.errors.categories}
                onChange={(categories) => formik.setFieldValue('categories.sync', categories.map(category => category.value))}
            />
            <CustomTextTarea
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
                marginBlockStart="44px !important"
            >
                create now
            </Button>
        </VStack>
    );
}
