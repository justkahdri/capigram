import React from "react";
import { Flex, Image, Skeleton, Stack, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useMutation } from "@apollo/client";

import { LIKE_ANON_PHOTO } from "src/utils/queries";
import useLocalStorage from "@hooks/useLocalStorage";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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

// TODO Move this to new component
const FavButton = ({ likes, photoId, photoKey }: FavButtonProps) => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(LIKE_ANON_PHOTO);

  const [liked, setLiked] = useLocalStorage(photoKey, false);
  const handleFavClick = () => {
    !liked && mutateFunction({ variables: { input: { id: photoId } } });
    setLiked(!liked);
  };

  return (
    <Stack
      as="button"
      direction="row"
      alignItems="center"
      onClick={handleFavClick}
      width="fit-content"
    >
      <FavIcon liked={liked} />
      <Text fontWeight={800} color={loading ? "blackAlpha.600" : "inherit"}>
        {likes} {likes == 1 ? "Like" : "Likes"}
      </Text>
    </Stack>
  );
};

const FavIcon = (props: { liked: boolean }) =>
  props.liked ? (
    <Icon as={AiFillHeart} boxSize={6} color="red.500" />
  ) : (
    <Icon as={AiOutlineHeart} boxSize={6} />
  );

export default Post;
