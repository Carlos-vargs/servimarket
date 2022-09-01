import { Button, Heading, VStack } from "@chakra-ui/react";
import CustomTextTarea from "@components/CustomTextTarea";
import fixErrorsMessage from "@utils/fixErrorsMessage";
import CustomInput from "@components/CustomInput";
import { request, gql } from "graphql-request";
import MessageIcon from "@icons/MessageIcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

export default function ContactForm({ emailTo }) {

    const router = useRouter()
    const { data: session } = useSession()

    const formik = useFormik({
        initialValues: {
            emailTo,
            subject: "",
            message: "",
        },
        onSubmit: async input => {

            try {
                await request(
                    process.env.NEXT_PUBLIC_GRAPHQL_URL,
                    gql`
                        mutation contactCompanyOwner($input: ContactCompanyOwnerInput!) {
                            contactCompanyOwner(input: $input) {
                                status
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
                    pathname: '/company/[id]',
                    query: { id: router.query.id },
                })

            } catch ({ response: { errors } }) {

                formik.setErrors(fixErrorsMessage(errors[0].extensions.validation))

            }

        }
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
            alignItems="flex-start"
            alignContent="flex-start"
            backgroundColor="base_ligth"
            onSubmit={formik.handleSubmit}
            paddingInline={['20px', '20px', '40px', '40px', '40px',]}
        >
            <Heading as="h3" fontSize="30px">Quick Contact Us</Heading>
            <CustomInput
                required
                name="subject"
                title="subject"
                value={formik.values.subject}
                placeholder="services request"
                onChange={formik.handleChange}
            />
            <CustomTextTarea
                required
                name="message"
                title="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="write your message"
            />
            <Button
                type="submit"
                alignSelf="flex-end"
                rightIcon={<MessageIcon />}
                marginBlockStart="44px !important"
            >
                send message
            </Button>
        </VStack>
    );
}

