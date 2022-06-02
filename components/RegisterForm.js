import UserPadlockIcon from "@icons/UserPadlockIcon";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import { Flex, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";

function RegisterForm() {

    const router = useRouter()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        onSubmit: async (values) => {

            try {
                const { data: { data: user, token } } = await axios.post('http://10.67.1.111:8000/api/register', values, config)

                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', JSON.stringify(token))

                router.push('/')

            } catch ({ response: { data: { errors } } }) {

                formik.setErrors(errors);

            }


        },
    })

    return (
        <Flex as="form" onSubmit={formik.handleSubmit} w="full" pt="46px" >
            <VStack spacing="38px" align="flex-start" w="inherit">
                <Flex w="full" gridGap="30px" direction={['column', 'column', 'row', 'row', 'row']} >
                    <CustomInput
                        onChange={formik.handleChange}
                        errors={formik.errors.name}
                        value={formik.values.name}
                        autoComplete="name"
                        placeholder="name"
                        title="name"
                        type="text"
                        name="name"
                        required
                    />
                    <CustomInput
                        placeholder="example@gmail.com"
                        onChange={formik.handleChange}
                        errors={formik.errors.email}
                        value={formik.values.email}
                        autoComplete="email"
                        title="email"
                        type="email"
                        name="email"
                        required
                    />
                </Flex>
                <Flex
                    direction={['column', 'column', 'row', 'row', 'row']}
                    mt={['30px !important', '30px !important', '0px', '0px', '0px']}
                    gridGap="30px"
                    w="full"
                >
                    <CustomInput
                        errors={formik.errors.password}
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="password"
                        title="password"
                        type="password"
                        name="password"
                        required
                    />
                    <CustomInput
                        errors={formik.errors.password_confirmation}
                        value={formik.values.password_confirmation}
                        placeholder="password confirmation"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        title="password confirmation"
                        name="password_confirmation"
                        type="password"
                        required
                    />
                </Flex>
                <CustomButton
                    alignSelf="flex-end"
                    type="submit"
                    mt="44px !important"
                >
                    <UserPadlockIcon />
                    register now
                </CustomButton>
            </VStack>
        </Flex >
    )
}

export default RegisterForm;