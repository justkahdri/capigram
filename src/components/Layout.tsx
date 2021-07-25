import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  const variant = useBreakpointValue({
    base: "mobile",
    md: "inline",
  });

  if (variant === "inline")
    return (
      <Stack as="main" alignItems="center" spacing={3}>
        <Header>
          <NavBar width="20%" justifyContent="space-between" />
        </Header>
        {children}
      </Stack>
    );
  else
    return (
      <Stack as="main" alignItems="center" spacing={3}>
        <Header />
        {children}
        <NavBar
          bottom={0}
          position="sticky"
          borderTop="solid 1px rgba(0,0,0,0.1)"
          width="100%"
          justifyContent="space-evenly"
        />
      </Stack>
    );
};

export default Layout;
