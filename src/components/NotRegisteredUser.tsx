import React from "react";
import { Heading, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";

import Layout from "./Layout";

const NotRegisteredUser = () => {
  return (
    <Layout alignItems="center" justifyContent="center" spacing="3rem">
      <Heading as="h2" fontFamily="Open Sans" textAlign="center">
        Can&apos;t access this page without loggin in
      </Heading>
      <Stack direction="row">
        <Link href="/login">
          <Button as="a" size="lg" colorScheme="pink" variant="outline">
            Log In
          </Button>
        </Link>
        <Link href="/register">
          <Button as="a" size="lg" colorScheme="pink">
            Register
          </Button>
        </Link>
      </Stack>
    </Layout>
  );
};

export default NotRegisteredUser;
