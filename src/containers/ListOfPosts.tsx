import React, { useState, useEffect } from "react";
import { Stack } from "@chakra-ui/react";

import getData from "../utils/getData";

import Post from "@components/Post";

import data from "../../database/db.json";

const ListOfPosts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    setPosts(data.photos);
  }, [getData]);

  return (
    <Stack
      flexDir="column"
      spacing={3}
      pt={2}
      borderTop="solid 1px rgba(0,0,0,0.1)"
    >
      {posts.map((photo) => (
        <Post {...photo} key={photo.id} />
      ))}
    </Stack>
  );
};

export default ListOfPosts;
