import { Button, Heading, VStack } from "@chakra-ui/react";
import CustomInput from "@components/CustomInput";
import EnvelopeIcon from "@icons/EnvelopeIcon";
import { useFormik } from "formik";

export default function Newsletter() {

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: values => {
            conosle.log(values)
        }
    })

    return (
        <VStack as="form" onSubmit={formik.handleSubmit} alignItems="flex-start" spacing="20px">
            <Heading as="h4" fontSize="24px" >
                newsletter
            </Heading>
            <CustomInput placeholder="Enter Your Email" required name="email" value={formik.values.email} onChange={formik.handleChange} />
            <Button leftIcon={<EnvelopeIcon />} type="submit">signup now</Button>
        </VStack>
    );
}

