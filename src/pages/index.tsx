import { Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import StoryBubble from "../components/StoryBubble";

const Home = () => {
  return (
    <Layout>
      {/* STORIES */}
      <Flex width="100%" px={3} overflowX="auto">
        <StoryBubble
          route="/new_story"
          user={{
            name: "Your story",
            nickname: "addStory",
            avatarUrl: "https://testing-library.com/img/octopus-64x64.png",
          }} // TODO Change for custom add to story
        />

        {[
          {
            route: "/a",
            user: {
              name: "Octo",
              nickname: "oct.21",
              avatarUrl: "https://testing-library.com/img/octopus-64x64.png",
            },
          },
          {
            route: "/b",
            user: {
              name: "Perritos",
              nickname: "ahjw",
              avatarUrl:
                "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg",
            },
          },
          {
            route: "/joaco.montes/story",
            user: {
              nickname: "joaco.montes.5",
              name: "Joaquin Montes",
              avatarUrl:
                "https://lh3.googleusercontent.com/a-/AOh14GhVQ0AsfRaWBgM7roaDbfHNOOrKECosKz37BHrm3N8=s96-c-rg-br100",
            },
          },
        ].map((story) => (
          <StoryBubble {...story} key={story.user.nickname} />
        ))}
      </Flex>
    </Layout>
  );
};

export default Home;
