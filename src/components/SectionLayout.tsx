import React, { FC } from "react";
import { Stack, StackProps, useBreakpointValue, Flex } from "@chakra-ui/react";

import BackTitle from "./BackTitle";
import NavBar from "./NavBar";

interface SectionLayoutProps extends StackProps {
  title: string;
}

const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  title,
  ...rest
}) => {
  const variant = useBreakpointValue({
    base: "mobile",
    md: "inline",
  });

  if (variant === "inline")
    return (
      <Stack alignItems="center" spacing={3} minH="100vh">
        <Flex width="100%" justifyContent="space-between" py={2}>
          <BackTitle width="100%">{title}</BackTitle>
          <NavBar width="20%" justifyContent="space-between" />
        </Flex>
        <Stack as="main" flex={1} {...rest}>
          {children}
        </Stack>
      </Stack>
    );
  else
    return (
      <Stack minHeight="100vh">
        <BackTitle width="100%" py={2}>
          {title}
        </BackTitle>
        <Stack as="main" flex={1} {...rest}>
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

export default SectionLayout;
