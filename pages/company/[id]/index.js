import dynamic from "next/dynamic";
import Wrapper from "@components/Wrapper";
import LayoutPage from "@components/LayoutPage";
const ProductList = dynamic(() => import("@components/ProductList"));
const CompanyDetails = dynamic(() => import("@components/CompanyDetails"));

export default function Company({ company }) {
  return (
    <LayoutPage titleHead={company.name}>
      <Wrapper
        marginInline="auto !important"
        justifyContent="center"
        paddingBlock="100px"
        direction="column"
        gridRowGap="30px"
        flexWrap="wrap"
        width="full"
      >
        <CompanyDetails company={company} />
        <ProductList products={company.products} />
      </Wrapper>
    </LayoutPage>
  );
}

export async function getServerSideProps(ctx) {
  const company = await fetch(
    `${process.env.NEXT_API_URL}/company?id=${ctx?.query?.id}`
  ).then((response) => response.json());

  if (!company) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: { company },
  };
}
