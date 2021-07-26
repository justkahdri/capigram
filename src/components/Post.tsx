import React from "react";
import { Flex, Image, Skeleton, Stack, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";

import useLocalStorage from "@hooks/useLocalStorage";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Post = ({ id, likes = 0, src }: PostProps) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Flex flexDir="column" as="article" width="100%">
      <Image src={src} objectFit="cover" fallback={<Skeleton minH="75vw" />} />
      <Stack
        direction="row"
        alignItems="center"
        onClick={() => setLiked(!liked)}
        width="fit-content"
      >
        <FavIcon liked={liked} />
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

const FavIcon = (props: { liked: boolean }) =>
  props.liked ? (
    <Icon as={AiFillHeart} boxSize={6} color="red.500" />
  ) : (
    <Icon as={AiOutlineHeart} boxSize={6} />
  );

export default Post;
