import React from "react";
import { Flex, Image, Skeleton, StackDivider, Text } from "@chakra-ui/react";
import Link from "next/link";

import FavButton from "./FavButton";

import usersByCategory from "@utils/usersByCategory";

const Post = ({
  id,
  likes = 0,
  src,
  categoryId,
  liked,
  isDetail = false,
}: PostProps) => {
  return (
    <Flex flexDir="column" as="article" width="100%">
      <Image
        src={src}
        objectFit="cover"
        fallback={<Skeleton minH="75vw" />}
        pb={2}
      />
      <FavButton likes={likes} photoId={id} liked={liked} />
      <Text>
        <b>
          {
            usersByCategory.find((userObj) => userObj.id === categoryId)
              ?.nickname
          }
        </b>{" "}
        post description! 😎
      </Text>
      {isDetail ? (
        <StackDivider pt={2} borderBottom="1px solid rgba(0,0,0,0.1)" />
      ) : (
        <Link href={`/detail/${id}`}>
          <Text as="a" color="blackAlpha.600">
            Ver los 3 comentarios
          </Text>
        </Link>
      )}
    </Flex>
  );
};

export default Post;
