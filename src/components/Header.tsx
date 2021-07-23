import React from "react";
import { Center, Heading } from "@chakra-ui/react";

const Header = () => {
  // TODO add navbar when display > md
  // const variant = useBreakpointValue({ base: "outline", md: "solid" })

  return (
    <Center width="100%" py={2} borderBottom="solid 1px rgba(0,0,0,0.1)">
      <Heading as="h1" size="lg">
        CAPIGRAM
      </Heading>
    </Center>
  );
};

export default Header;
