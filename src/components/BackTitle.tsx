import React from "react";
import Link from "next/link";
import { Icon, Stack, Text } from "@chakra-ui/react";

import { BsArrowLeft } from "react-icons/bs";

interface BackTitleProps {
  title: string;
}

const BackTitle = ({ title }: BackTitleProps) => {
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

      <Text as="h1" fontSize="lg">
        {title}
      </Text>
    </Stack>
  );
};

export default BackTitle;
