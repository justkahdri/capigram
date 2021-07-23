import { Stack } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import StoryBubble from "./StoryBubble";

const Layout: React.FC = ({ children }) => {
  return (
    <Stack alignItems="center" spacing={3}>
      <Header />
      {children}
      <NavBar bottom={0} position="fixed" />
    </Stack>
  );
};

export default Layout;
