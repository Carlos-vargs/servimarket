import UserPadlockIcon from "@icons/UserPadlockIcon";
import CustomButton from "@components/CustomButton";
import CustomInput from "@components/CustomInput";
import { Flex, VStack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";

function LoginForm({ csrfToken }) {

    const session = useSession();

    // console.log("session", session)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            redirect: false
        },
        onSubmit: (values) => signIn('credentials', values)

    })

    return (
        <Flex as="form" onSubmit={formik.handleSubmit} w="full" pt="46px" >
            <VStack spacing="38px" align="flex-start" w="inherit">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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