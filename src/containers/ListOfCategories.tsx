import React from "react";
import { Flex, SkeletonCircle, Stack } from "@chakra-ui/react";

import useCategoriesData from "@hooks/useCategoriesData";

import StoryBubble from "@components/StoryBubble";

const ListOfCategories = () => {
  const size = "4rem";
  const { categories, loading } = useCategoriesData();

  if (loading)
    return (
      <Stack direction="row" overflow="auto" width="100%" px={2}>
        {Array(10)
          .fill("")
          .map((i, idx) => (
            <SkeletonCircle minW={size} minH={size} key={idx} />
          ))}
      </Stack>
    );

  return (
    <Flex width="100%" px={2} overflowX="auto">
      <StoryBubble
        path="/new_story"
        emoji="Your story"
        name="addStory"
        size={size}
        cover="https://testing-library.com/img/octopus-64x64.png"
        // TODO Change for custom add to story
      />

      {categories.map((category) => (
        <StoryBubble {...category} key={category.id} size={size} />
      ))}
    </Flex>
  );
};

export default ListOfCategories;
