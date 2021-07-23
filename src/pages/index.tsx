import { Stack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import StoryBubble from "../components/StoryBubble";

const Home = () => {
  return (
    <Layout>
      {/* STORIES */}
      <Stack direction="row" width="100%" px={3}>
        {[
          {
            src: "https://testing-library.com/img/octopus-64x64.png",
            alt: "octopus",
            route: "/a",
            name: "Octo",
          },
          {
            src: "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg",
            alt: "perro",
            route: "/b",
            name: "Perritos",
          },
        ].map((story) => (
          <StoryBubble {...story} key={story.alt} />
        ))}
      </Stack>
    </Layout>
  );
};

export default Home;
