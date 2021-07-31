import React, { FC } from "react";
import Link from "next/link";
import { Heading, Icon, Stack } from "@chakra-ui/react";

import { BsArrowLeft } from "react-icons/bs";

const BackTitle: FC = ({ children }) => {
  return (
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

      <Heading as="h1" fontSize="lg" fontFamily="Open Sans">
        {children}
      </Heading>
    </Stack>
  );
};

export default BackTitle;
