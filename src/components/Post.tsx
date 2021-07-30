import React from "react";
import { Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import Link from "next/link";

import FavButton from "./FavButton";

const Post = ({ id, likes = 0, src }: PostProps) => {
  const key = `like-${id}`;

  return (
    <Flex flexDir="column" as="article" width="100%">
      <Image src={src} objectFit="cover" fallback={<Skeleton minH="75vw" />} />
      <FavButton likes={likes} photoId={id} photoKey={key} />
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
