import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import getData from "../utils/getData";

import StoryBubble from "../components/StoryBubble";

const ListOfCategories = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    getData("https://capigram-server.vercel.app/categories", setCategories);
  }, [getData]);

  return (
    <Flex width="100%" px={3} overflowX="auto">
      <StoryBubble
        path="/new_story"
        emoji="Your story"
        name="addStory"
        cover="https://testing-library.com/img/octopus-64x64.png"
        // TODO Change for custom add to story
      />

      {categories.map((category) => (
        <StoryBubble {...category} key={category.id} />
      ))}
    </Flex>
  );
};

export default ListOfCategories;
