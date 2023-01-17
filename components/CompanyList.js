import Wrapper from "@components/Wrapper";
import SwiperHead from "@components/SwiperHead";
import NayNotice from "@components/NayNotice";
import CompanyCard from "@components/CompanyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, VStack } from "@chakra-ui/react";

export default function CompanyList({
  companies = [],
  children,
  withSwiper = false,
  paddingBlock = "60px",
  ...rest
}) {
  return (
    <Wrapper
      marginInline="auto !important"
      justifyContent="center"
      paddingBlock={paddingBlock}
      direction="column"
      color="white"
      width="full"
      {...rest}
    >
      {withSwiper ? (
        <>
          {companies.length !== 0 ? (
            <Swiper
              spaceBetween={30}
              slidesPerView={"auto"}
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column-reverse",
                gap: "54px",
              }}
            >
              <SwiperHead title="Explore Companies" />
              {companies.map((company) => (
                <SwiperSlide
                  key={company.id}
                  style={{ width: "auto", height: "auto" }}
                >
                  <CompanyCard company={company} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <VStack justifyContent="center" gridGap="60px">
              <SwiperHead title="Explore Companies" navigation={false} />
              <NayNotice message="no companies available yet" />
            </VStack>
          )}
        </>
      ) : (
        <>
          <Flex
            textAlign="center"
            gridGap="30px"
            width="full"
            flexWrap="wrap"
            justifyContent="center"
          >
            {companies.length !== 0 ? (
              companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))
            ) : (
              <NayNotice message="no companies available yet" />
            )}
          </Flex>
        </>
      )}
    </Wrapper>
  );
}
