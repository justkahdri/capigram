import { Stack } from "@chakra-ui/react";
import React from "react";

import BackTitle from "@components/BackTitle";
import NotRegisteredUser from "@components/NotRegisteredUser";
import NavBar from "@components/NavBar";

import { useAppContext } from "@utils/Context";

const Profile = () => {
  const { isAuth } = useAppContext();

  if (!isAuth) return <NotRegisteredUser />;

  return (
    <Stack as="main" role="main" minHeight="100vh">
      <BackTitle>Profile</BackTitle>
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

export default Profile;
