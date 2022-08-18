import { Button, Heading, VStack } from "@chakra-ui/react";
import CustomTextTarea from "@components/CustomTextTarea";
import CustomInput from "@components/CustomInput";
import MessageIcon from "@icons/MessageIcon";
import { useRouter } from "next/router";
import { useFormik } from "formik";


export default function ContactForm() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",

        },
        onSubmit: values => {
            
            router.push("/")

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
                name="name"
                title="name"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            <CustomInput
                required
                name="email"
                title="email"
                placeholder="example@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
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
