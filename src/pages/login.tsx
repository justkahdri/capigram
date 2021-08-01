import React, { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { useAppContext } from "@utils/Context";
import Layout from "@components/Layout";
import UserForm from "@components/UserForm";

import { LOGIN_USER } from "@utils/queries";

const LoginPage = () => {
  const { isAuth, activateAuth } = useAppContext();
  const router = useRouter();
  const triggerError = useToast({
    title: "An error ocurred during Login...",
    status: "error",
    isClosable: true,
  });

  const [mutation, { loading }] = useMutation(LOGIN_USER);
  const loginUser = ({ email, password }: TRegister) => {
    mutation({ variables: { input: { email, password } } })
      .then(activateAuth)
      .catch((err) => triggerError({ description: err.message }));
    // error && triggerError({ description: error.message });
  };

  useEffect(() => {
    isAuth && router.push("/profile");
  }, [isAuth]);

  return (
    <Layout>
      <UserForm
        title="Sign in to enjoy all features!"
        cta="Login"
        bottomText="Not registered?"
        link="Create an account"
        handleSubmit={loginUser}
        loading={loading}
        altRoute="/register"
      />
    </Layout>
  );
};

export default LoginPage;
