import { Stack } from "@chakra-ui/react";
import React from "react";

import BackTitle from "@components/BackTitle";
import NavBar from "@components/NavBar";
import NotRegisteredUser from "@components/NotRegisteredUser";

import { useAppContext } from "@utils/Context";

const Favourites = () => {
  const { isAuth } = useAppContext();

  if (!isAuth) return <NotRegisteredUser />;

  return (
    <Stack minHeight="100vh">
      <BackTitle>Activity</BackTitle>
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

export default Favourites;
