import fixErrorsMessage from "@components/fixErrorsMessage";
import CustomTextTarea from "@components/CustomTextTarea";
import { Button, Flex, VStack } from "@chakra-ui/react";
import CategoryForm from "@components/CategoryForm";
import CustomInput from "@components/CustomInput";
import MultiSelect from "@components/MultiSelect";
import { gql, request } from "graphql-request";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SaveIcon from "@icons/SaveIcon";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

export default function CompanyForm({ data = [] }) {

    const router = useRouter()

    const { data: session } = useSession()

    const [categories, setCategories] = useState(data)
    const [newCategory, setNewCategory] = useState({ id: "", name: "" })
    const [selectedValues, setSelectedValues] = useState([])

    useEffect(() => {

        if (newCategory.id !== "") {
            setCategories([...categories, newCategory])
            setSelectedValues([...selectedValues, { value: newCategory.id, label: newCategory.name }])
        }

    }, [newCategory]);


    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            categories: {
                sync: []
            }
        },
        onSubmit: async values => {

            if (selectedValues.length !== 0) {
                values.categories.sync = selectedValues.map(option => option.value)
            }

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

                router.push({
                    pathname: '/user/[id]',
                    query: { id: session.user.id },
                })

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
            <Flex flexWrap="wrap" width="full" alignItems="center" justifyContent="space-between" position="relative" >
                <MultiSelect
                    isMulti
                    required
                    name="categories"
                    data={categories}
                    title="categories"
                    value={selectedValues}
                    placeholder="categories"
                    width="calc(100% - 60px)"
                    errors={formik.errors.categories}
                    onChange={(e) => setSelectedValues(e)}
                />
                <CategoryForm setNewCategory={setNewCategory} />
            </Flex>
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
