import React from "react";
import { Stack, Heading } from "@chakra-ui/react";

const Header = () => {
  // TODO add navbar when display > md
  // const variant = useBreakpointValue({ base: "outline", md: "solid" })

  return (
    <Stack width="100%" py={2} px={5} borderBottom="solid 1px rgba(0,0,0,0.1)">
      <Heading as="h1" variant="brandy">
        CAPIGRAM
      </Heading>
    </Stack>
  );
};

export default Header;
