import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import PlusIcon from "@icons/PlusIcon"
import fixErrorsMessage from "@components/fixErrorsMessage";
import { useSession } from "next-auth/react";
import { useFormik } from "formik";
import CustomInput from "@components/CustomInput";
import SaveIcon from "@icons/SaveIcon";
import { request, gql } from "graphql-request";

export default function CategoryForm({ setNewCategory }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data: session } = useSession()

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: async values => {

            try {
                const { createCategory } = await request(
                    process.env.NEXT_PUBLIC_GRAPHQL_URL,
                    gql`
                        mutation createCategory($name: String!) {
                            createCategory(name: $name) {
                                id
                                name
                            }
                        }
                    `,
                    {
                        name: values.name
                    },
                    {
                        'Authorization': `Bearer ${session.token}`,
                    }
                )

                setNewCategory(createCategory)

                formik.resetForm()

                onClose()

            } catch ({ response: { errors } }) {

                formik.setErrors(fixErrorsMessage(errors[0].extensions.validation))

            }
        },
    })

    return <>
        <Flex
            width="50px"
            color="white"
            height="50px"
            padding="10px"
            onClick={onOpen}
            cursor="pointer"
            borderRadius="full"
            alignItems="center"
            backgroundColor="base"
            justifyContent="center"
            marginBlockStart="36px"
            title="create new category"
        >
            <PlusIcon />
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay>
                <ModalContent backgroundColor="base_ligth" color="white">
                    <ModalHeader textAlign="center">
                        <Heading as="h2" textTransform="capitalize" fontSize="30px">create new category</Heading>
                    </ModalHeader>
                    <ModalCloseButton _focus={{ boxShadow: "none" }} />
                    <ModalBody paddingBlockEnd="20px">
                        <VStack as="form" onSubmit={formik.handleSubmit} gridGap="24px">
                            <CustomInput
                                required
                                name="name"
                                title="name"
                                placeholder="name"
                                value={formik.values.name}
                                errors={formik.errors.name}
                                onChange={formik.handleChange}
                            />
                            <Button
                                type="submit"
                                alignSelf="flex-end"
                                leftIcon={<SaveIcon />}
                            >
                                create now
                            </Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    </>;
}
