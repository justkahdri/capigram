import { Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { BsArrowLeft } from "react-icons/bs";

const Favourites = () => {
  return (
    <Stack as="main" role="main">
      <Stack
        direction="row"
        px={5}
        py={2}
        borderBottom="solid 1px rgba(0,0,0,0.1)"
        alignItems="center"
        spacing={5}
      >
        <Link href="/">
          <a>
            <Icon as={BsArrowLeft} boxSize={6} />
          </a>
        </Link>

        <Text as="h1" fontSize="lg">
          Activity
        </Text>
      </Stack>
    </Stack>
  );
};

export default Favourites;
