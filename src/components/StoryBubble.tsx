import { Image, SkeletonCircle, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const StoryBubble = ({ user, route }: StoryProps) => {
  const size = "3.5rem";
  return (
    <Link href={route}>
      <Center as="a" flexDirection="column" minW="80px">
        <Center
          bgGradient="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
          borderRadius="full"
          boxSize={size}
        >
          <Image
            src={user.avatarUrl}
            boxSize="92%"
            p={"2px"}
            alt={`${user.nickname}'s stories`}
            background="white"
            borderRadius="full"
            objectFit="cover"
            fallback={<SkeletonCircle boxSize={size} />}
          />
        </Center>
        <Text color="blackAlpha.800" fontSize="xs">
          {user.name.length > 12 ? `${user.name.slice(0, 10)}...` : user.name}
        </Text>
      </Center>
    </Link>
  );
};

export default StoryBubble;
