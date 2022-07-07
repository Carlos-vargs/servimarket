import Star from '../styles/Rating.module.css'
import { Flex } from "@chakra-ui/react";
import StarIcon from "@icons/StarIcon";
import { useFormik } from "formik";

export default function FormRating({ productId }) {

    const formik = useFormik({
        initialValues: {
            product_id: '',
            rating: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <>
            <Flex
                onSubmit={formik.handleSubmit}
                onChange={formik.handleChange}
                className={Star.rating}
                direction="row-reverse"
                alignSelf="flex-end"
                color="#aaa"
                as="form"
            >
                {/* <button type="submit">star</button> */}
                <input type="radio" name="rating" value="5" id={`${productId}e5`} />
                <label htmlFor={`${productId}e5`} >
                    <StarIcon />
                </label>
                <input type="radio" name="rating" value="4" id={`${productId}e4`} />
                <label htmlFor={`${productId}e4`} >
                    <StarIcon />
                </label>
                <input type="radio" name="rating" value="3" id={`${productId}e3`} />
                <label htmlFor={`${productId}e3`} >
                    <StarIcon />
                </label>
                <input type="radio" name="rating" value="2" id={`${productId}e2`} />
                <label htmlFor={`${productId}e2`} >
                    <StarIcon />
                </label>
                <input type="radio" name="rating" value="1" id={`${productId}e1`} />
                <label htmlFor={`${productId}e1`} >
                    <StarIcon />
                </label>
            </Flex>
        </>
    );
}
