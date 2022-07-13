import UserPadlockIcon from "@icons/UserPadlockIcon";
import CustomInput from "@components/CustomInput";
import { Button, Flex, VStack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

export default function RegisterForm() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            redirect: false
        },
        onSubmit: async values => {

            const { error } = await signIn('register', values)

            if (!error) {
                router.push('/')
            }

            formik.setErrors(JSON.parse(error))

        },
    });


    return (
        <VStack as="form" onSubmit={formik.handleSubmit} width="full" paddingBlockStart="46px" spacing="38px">
            <Flex width="full" gridGap="30px" direction={['column', 'column', 'row', 'row', 'row']} >
                <CustomInput
                    onChange={formik.handleChange}
                    errors={formik.errors?.error?.name}
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
                    errors={formik.errors?.error?.email}
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
                marginBlockStart={['30px !important', '30px !important', '0px', '0px', '0px']}
                gridGap="30px"
                width="full"
            >
                <CustomInput
                    errors={formik.errors?.error?.password}
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
                    errors={formik.errors?.error?.password_confirmation}
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
            <Button
                boxShadow="none"
                type="submit"
                marginBlockStart="44px !important"
                alignSelf="flex-end"
                isDisabled={formik.errors?.error}
                leftIcon={<UserPadlockIcon />}
            >
                register now
            </Button>
        </VStack>
    )
}
