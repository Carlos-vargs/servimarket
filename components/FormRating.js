import Star from '../styles/Rating.module.css'
import { Flex } from "@chakra-ui/react";
import StarIcon from "@icons/StarIcon";
import { Fragment, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { gql, request } from 'graphql-request';
import { useFormik } from 'formik';

export default function FormRating({ productId, hasRated, setRatings, setProductAvg }) {

    const { data: session } = useSession()
    const [ratingValue, setRatingValue] = useState(hasRated);

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            rating: '',
            product_id: productId,
        },
        onSubmit: async (input) => {


            if (!session?.user.id) {
                router.push("/login")
            }

            try {
                const { createOrUpdateProductRating: { product: { avg, usersRated } } } = await request(
                    process.env.NEXT_PUBLIC_GRAPHQL_URL,
                    gql`
                    mutation createOrUpdateProductRating($input: CreateOrUpdateProductRatingInput!) {
                        createOrUpdateProductRating(input: $input) {
                            product{
                                id 
                                name 
                                description
                                avg
                                usersRated{
                                    id
                                    name
                                }
                                hasRated        
                            }
                        }
                    }
                `,
                    {
                        input
                    },
                    {
                        'Authorization': `Bearer ${session?.token}`,
                    }
                )

                setRatings([...usersRated])
                setProductAvg(avg)

            } catch ({ response: { errors } }) {

                console.error(errors)

            }

        }
    })

    const stars = [
        { id: "e5", value: "5", },
        { id: "e4", value: "4", },
        { id: "e3", value: "3", },
        { id: "e2", value: "2", },
        { id: "e1", value: "1", },
    ]

    if (hasRated && ratingValue) {

        for (let i = 0; i < stars.length; i++) {

            if (stars[i].value == ratingValue) {
                stars[i].isDefaultChecked = true
            }
        }
    }

    return (
        <Flex
            className={Star.rating}
            direction="row-reverse"
            alignSelf="flex-end"
            color="#aaa"
            as="form"
        >
            {
                stars.map((e) =>
                    <Fragment key={`${productId}${e.id}`}>
                        <input type="radio" name="rating" value={e.value} id={`${productId}${e.id}`} checked={e?.isDefaultChecked} onChange={formik.handleChange} />
                        <label htmlFor={`${productId}${e.id}`} onClick={() => {
                            formik.setFieldValue('rating', e.value)
                            formik.handleSubmit()
                            setRatingValue(e.value)
                        }}  >
                            <StarIcon />
                        </label>
                    </Fragment>
                )
            }
        </Flex>
    );
}
