import React from "react";
import { Stack, Text, Icon } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { LIKE_ANON_PHOTO } from "src/utils/queries";
import useLocalStorage from "@hooks/useLocalStorage";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavButton = ({ likes, photoId, photoKey }: FavButtonProps) => {
  const [mutateFunction, { loading, error }] = useMutation(LIKE_ANON_PHOTO);
  // TODO Use error to disable component and trigger a toast

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

export default FavButton;
