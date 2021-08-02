import React from "react";
import { Stack, Text, Icon, useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { LIKE_PHOTO } from "src/utils/queries";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavButton = ({ likes, liked, photoId }: FavButtonProps) => {
  const [likeMutation, { loading }] = useMutation(LIKE_PHOTO);

  // TODO Use error to disable component and trigger a toast
  const triggerError = useToast({
    title: "Sorry! Couldn't apply your like.",
    status: "error",
    isClosable: true,
    duration: 7000,
  });

  const handleFavClick = () => {
    likeMutation({ variables: { input: { id: photoId } } }).catch((err) =>
      triggerError({ description: err.message })
    );
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

export default FavButton;
