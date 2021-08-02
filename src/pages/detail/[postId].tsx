import React from "react";
import { useRouter } from "next/router";
import { Stack, Text } from "@chakra-ui/react";

import DetailPost from "@containers/DetailPost";
import BackTitle from "@components/BackTitle";

const Detail = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Stack>
      <BackTitle width="100%" py={2}>
        Comments
      </BackTitle>
      <DetailPost id={Number(postId)} />
      <Text id="comments">
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here Comments here Comments here Comments here
        Comments here Comments here
      </Text>
    </Stack>
  );
};

export default Detail;
