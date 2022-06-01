import { Flex, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import UserPadlockIcon from "@icons/UserPadlockIcon";
import { useFormik } from "formik";
import CustomButton from "@components/CustomButton";
import axios from "axios";


function LoginForm() {

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
                localStorage.setItem('token', token)

                window.location.href = '/';
                

            } catch ({ response: { data: { errors } } }) {

                formik.setErrors(errors);

            }


        },
    })

    return (
        <Flex as="form" onSubmit={formik.handleSubmit} w="full" pt="46px" >
            <VStack spacing="38px" align="flex-start" w="full">
                <FormControl>
                    <FormLabel htmlFor="email" fontWeight="400" mb="2">Email Address</FormLabel>
                    <Input
                        _focus={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                        placeholder="example@gmail.com"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        autoComplete="email"
                        bgColor="base"
                        border="none"
                        name="email"
                        type="email"
                        id="email"
                        px="30px"
                        py="10px"
                        required
                        h="56px"
                    />
                    {formik.errors.email && <Text color="base_pink" textAlign="end" mt="2">{formik.errors.email}</Text>}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password" fontWeight="400" mb="2">Password</FormLabel>
                    <Input
                        _focus={{ boxShadow: `0 0 0 1px #ff0076`, borderColor: "base_pink" }}
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="password"
                        name="password"
                        type="password"
                        bgColor="base"
                        id="password"
                        border="none"
                        px="30px"
                        py="10px"
                        required
                        h="56px"
                    />
                    {formik.errors.password && <Text color="base_pink" textAlign="end" mt="2">{formik.errors.password}</Text>}
                </FormControl>
                <CustomButton
                    alignSelf="flex-end"
                    type="submit"
                >
                    <UserPadlockIcon />
                    login now
                </CustomButton>
            </VStack>
        </Flex >
    );
}

export default LoginForm;