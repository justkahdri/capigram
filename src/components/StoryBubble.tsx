import {
  Image,
  SkeletonCircle,
  Center,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const StoryBubble = (props) => {
  const size = "3.5rem";
  return (
    <Link href={props.route}>
      <a>
        <Flex alignItems="center" direction="column">
          <Center
            bgGradient="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
            borderRadius="full"
            boxSize={size}
          >
            <Image
              src={props.src}
              boxSize="92%"
              p={"2px"}
              alt={props.alt}
              background="white"
              borderRadius="full"
              objectFit="cover"
              fallback={<SkeletonCircle boxSize={size} />}
            />
          </Center>
          <Text color="blackAlpha.800" fontSize="xs">
            {props.name}
          </Text>
        </Flex>
      </a>
    </Link>
  );
};

export default StoryBubble;
