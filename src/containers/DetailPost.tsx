import React from "react";
import { useQuery } from "@apollo/client";
import { Heading, Skeleton } from "@chakra-ui/react";

import Post from "@components/Post";

import { getSinglePhoto } from "src/utils/queries";

interface DetailPostData {
  photo: TPost;
}

interface DetailPostVars {
  id: number;
}

const DetailPost = ({ id }: DetailPostVars) => {
  const { loading, error, data } = useQuery<DetailPostData, DetailPostVars>(
    getSinglePhoto,
    { variables: { id } }
  );

  if (error) return <Heading>An error ocurred...</Heading>;
  else if (!data || loading) return <Skeleton width="100%" height="300px" />;

  return <Post {...data.photo} isDetail />;
};

export default DetailPost;
