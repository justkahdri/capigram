import React from "react";
import { Button, Text } from "@chakra-ui/react";

import NotRegisteredUser from "@components/NotRegisteredUser";

import { useAppContext } from "@utils/Context";
import SectionLayout from "@components/SectionLayout";

const Profile = () => {
  const { isAuth, removeAuth } = useAppContext();

  if (!isAuth) return <NotRegisteredUser />;

  return (
    <SectionLayout title="Profile">
      <Text>You are logged on Capigram.</Text>
      <Button colorScheme="pink" variant="ghost" onClick={removeAuth}>
        Log out
      </Button>
    </SectionLayout>
  );
};

export default Profile;
