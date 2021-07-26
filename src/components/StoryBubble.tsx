import { Image, SkeletonCircle, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const StoryBubble = ({ cover, emoji, name, path, size }: StoryProps) => {
  return (
    <Link href={path}>
      <Center as="a" flexDirection="column" minW="80px">
        <Center
          as="figure"
          bgGradient="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
          borderRadius="full"
          boxSize={size}
        >
          <Image
            src={cover}
            boxSize="93%"
            p={"2px"}
            alt={`${name}'s stories`}
            background="white"
            borderRadius="full"
            objectFit="cover"
            fallback={<SkeletonCircle boxSize={size} />}
          />
        </Center>
        <Text color="blackAlpha.800" fontSize="xs">
          {emoji.length > 12 ? `${emoji.slice(0, 10)}...` : emoji}
        </Text>
      </Center>
    </Link>
  );
};

export default StoryBubble;
