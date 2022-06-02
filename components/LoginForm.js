import UserPadlockIcon from "@icons/UserPadlockIcon";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import { Flex, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import axios from "axios";


function LoginForm() {

    const router = useRouter()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {

            try {
                const { data: { data: user, token } } = await axios.post('http://10.67.1.111:8000/api/login', values, config)

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
                <CustomButton
                    alignSelf="flex-end"
                    type="submit"
                    mt="44px !important"
                >
                    <UserPadlockIcon />
                    login now
                </CustomButton>
            </VStack>
        </Flex >
    );
}

export default LoginForm;