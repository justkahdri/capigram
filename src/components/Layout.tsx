import { Stack, StackProps, useBreakpointValue } from "@chakra-ui/react";
import React, { FC } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout: FC<StackProps> = ({ children, ...rest }) => {
  const variant = useBreakpointValue({
    base: "mobile",
    md: "inline",
  });

  if (variant === "inline")
    return (
      <Stack alignItems="center" spacing={3} minH="100vh">
        <Header>
          <NavBar width="20%" justifyContent="space-between" />
        </Header>
        <Stack as="main" role="main" flex={1} width="100%" {...rest}>
          {children}
        </Stack>
      </Stack>
    );
  else
    return (
      <Stack alignItems="center" spacing={3} minH="100vh">
        <Header />
        <Stack as="main" role="main" flex={1} width="100%" {...rest}>
          {children}
        </Stack>
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
