import { Flex, Image, Skeleton, Stack, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { BiHeart } from "react-icons/bi";

const Post = ({ id, likes = 0, src }: PostProps) => {
  return (
    <Flex flexDir="column" as="article" width="100%">
      <Image src={src} objectFit="cover" fallback={<Skeleton minH="75vw" />} />
      <Stack direction="row" alignItems="center">
        <Icon as={BiHeart} boxSize={6} />
        <Text fontWeight={800}>
          {likes} {likes == 1 ? "Like" : "Likes"}
        </Text>
      </Stack>
      <Text>
        <b>poxyram</b> fiiiiiuuumba
      </Text>
      <Link href={`/detail/${id}`}>
        <Text as="a" color="blackAlpha.600">
          Ver los 3 comentarios
        </Text>
      </Link>
    </Flex>
  );
};

export default Post;
