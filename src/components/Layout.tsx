import { Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <Stack alignItems="center" spacing={2} divider={<StackDivider />}>
      <Header />
      {children}
      <NavBar bottom={0} position="sticky" />
    </Stack>
  );
};

export default Layout;
