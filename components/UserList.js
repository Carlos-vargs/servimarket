import { Swiper, SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";
import NayNotice from "@components/NayNotice";
import SwiperHead from "@components/SwiperHead";
import UserCard from "@components/UserCard";
import Wrapper from "@components/Wrapper";
import "swiper/css";

export default function UserList({ users = [] }) {
  return (
    <Flex width="full" backgroundColor="base_ligth">
      <Wrapper
        marginInline="auto !important"
        backgroundColor="base_ligth"
        paddingBlock="116px"
        position="relative"
        direction="column"
        gridGap="54px"
        color="white"
        width="full"
      >
        {users.length !== 0 ? (
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
            <SwiperHead title="browse users" />
            {users.map((e) => (
              <SwiperSlide key={e.id} style={{ width: "auto", height: "auto" }}>
                <UserCard name={e.name} id={e.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Flex justifyContent="center" flexWrap="wrap" gridGap="60px">
            <SwiperHead title="browse users" navigation={false} />
            <NayNotice
              url="/register"
              message="no registered users yet."
              messageLink="would you like to be the first?"
            />
          </Flex>
        )}
      </Wrapper>
    </Flex>
  );
}
