import React from "react";
import { useQuery } from "@apollo/client";
import {
  Heading,
  Image,
  Skeleton,
  SimpleGrid,
  useBreakpointValue,
  Text,
  Link as Anchor,
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";

import { GET_FAVORITES } from "@utils/queries";
import Link from "next/link";

interface ListOfFavsData {
  favs: PostProps[];
}

const ListOfFavs = () => {
  const size = useBreakpointValue({ base: "100px", sm: "150px", md: "200px" });
  const columns = useBreakpointValue({ base: 3, lg: 4, xl: 5 });
  const { data, loading, error } = useQuery<ListOfFavsData>(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <Heading>An error ocurred 🤯, log out and try again later</Heading>;
  } // TODO Handle error

  if (data && !data.favs.length)
    return (
      <Stack padding={5}>
        <Heading fontFamily="Open Sans">You have no favs yet!</Heading>
        <Text>
          {"If you go back to "}
          <Link href="/">
            <Anchor as="a" color="pink.500">
              homepage
            </Anchor>
          </Link>
          {" and like some photos, they will appear here."}
        </Text>
      </Stack>
    );

  return (
    <SimpleGrid columns={columns} alignSelf="center" spacing={3}>
      {loading || !data
        ? Array(10)
            .fill("")
            .map((i, idx) => <Skeleton key={idx} boxSize={size} rounded="md" />)
        : data.favs.map((fav) => (
            <Link key={fav.id} href={`/detail/${fav.id}`}>
              <Box as="a" cursor="pointer">
                <Image
                  src={fav.src}
                  objectFit="cover"
                  rounded="md"
                  boxSize={size}
                  fallback={<Skeleton boxSize={size} rounded="md" />}
                />
              </Box>
            </Link>
          ))}
    </SimpleGrid>
  );
};

export default ListOfFavs;
