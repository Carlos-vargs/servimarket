import UserPadlockIcon from "@icons/UserPadlockIcon";
import CustomInput from "@components/CustomInput";
import { Button, VStack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

export default function LoginForm() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            redirect: false,
        },
        onSubmit: async values => {

            const { error } = await signIn('login', values)

            if (!error) {
                router.push('/')
            }
            
            formik.setErrors((JSON.parse(error)))

        },
    });

    return (
        <VStack as="form" onSubmit={formik.handleSubmit} width="full" paddingBlockStart="46px" spacing="38px">
            <CustomInput
                errors={formik.errors?.error?.email}
                placeholder="example@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                autoComplete="email"
                title="email"
                type="email"
                name="email"
                required
            />
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
            <Button
                type="submit"
                marginBlockStart="44px !important"
                alignSelf="flex-end"
                isDisabled={formik.errors?.error}
                leftIcon={<UserPadlockIcon />}
            >
                login now
            </Button>
        </VStack>
    )
}
