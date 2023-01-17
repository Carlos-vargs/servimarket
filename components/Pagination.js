import { Button, Flex, VisuallyHidden } from "@chakra-ui/react";
import ArrowIconPagination from "@icons/ArrowIconPagination";
import styles from "../styles/Pagination.module.css";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pagination({ paginatorInfo }) {

    const router = useRouter()
    const [selectedPage, setSelectedPage] = useState(0)

    useEffect(() => {
        if (router.query.page) {
            setSelectedPage(parseInt(router.query.page - 1))
        }
    }, [router.query.page]);

    return (
        <Flex
            overflowX={['scroll', 'scroll', 'auto',]}
            maxWidth={['300px', '300px', 'fit-content']}
            borderRadius="md"
            border="1px solid #585c75"
            backgroundColor="base_ligth"
            justifyContent="space-between"
        >
            <ReactPaginate
                breakLabel="..."
                forcePage={selectedPage}
                activeClassName={styles.currentPage}
                pageRangeDisplayed={3}
                nextClassName={styles.next}
                className={styles.list}
                marginPagesDisplayed={2}
                pageCount={paginatorInfo?.lastPage}
                previousClassName={styles.previous}
                onPageChange={(page) => {
                    setSelectedPage(page.selected)
                    router.push(`?page=${++page.selected}`, undefined, { scroll: false })
                }}
                previousLabel={
                    <Button
                        padding={0}
                        border="none"
                        borderRadius={0}
                        variant="outline"
                        isDisabled={!(paginatorInfo?.currentPage !== 1)}
                    >
                        <VisuallyHidden>Previous</VisuallyHidden>
                        <ArrowIconPagination />
                    </Button>
                }
                nextLabel={
                    <Button
                        padding={0}
                        border="none"
                        borderRadius={0}
                        variant="outline"
                        transform="rotate(180deg)"
                        isDisabled={!paginatorInfo?.hasMorePages}
                    >
                        <VisuallyHidden>Next</VisuallyHidden>
                        <ArrowIconPagination />
                    </Button>
                }
                renderOnZeroPageCount={null}
            />
        </Flex>
    );
}
