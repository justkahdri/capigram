import React from "react";
import { Heading, Skeleton, Stack } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import Post from "@components/Post";
import { getPhotos } from "../utils/queries";

interface ListOfPhotosData {
  photos: PostProps[];
}

interface ListOfPhotosVars {
  categoryId?: number;
}

const ListOfPosts = ({ categoryId }: ListOfPhotosVars) => {
  const { loading, error, data } = useQuery<ListOfPhotosData, ListOfPhotosVars>(
    getPhotos,
    { variables: { categoryId } }
  );

  if (error) {
    return <Heading>An error ocurred... 🤯</Heading>;
  } // TODO Handle error

  return (
    <Stack
      flexDir="column"
      spacing={3}
      pt={2}
      width="100%"
      borderTop="solid 1px rgba(0,0,0,0.1)"
    >
      {loading || !data
        ? Array(3)
            .fill("")
            .map((i, idx) => <Skeleton key={idx} width="100%" height="500px" />)
        : data.photos.map((photo) => <Post {...photo} key={photo.id} />)}
    </Stack>
  );
};

export default ListOfPosts;
