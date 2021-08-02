import React, { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { useAppContext } from "@utils/Context";
import Layout from "@components/Layout";
import UserForm from "@components/UserForm";

import { REGISTER_USER } from "@utils/queries";

const RegisterPage = () => {
  const { activateAuth, isAuth } = useAppContext();
  const router = useRouter();
  const triggerError = useToast({
    title: "Ups! An error ocurred during register",
    status: "error",
    isClosable: true,
  });

  const [registerMutation, { loading }] = useMutation(REGISTER_USER);

  const registerNewUser = ({ email, password }: TRegister) => {
    const variables = { input: { email, password } };
    registerMutation({ variables })
      .then(({ data }) => activateAuth(data.signup))
      .catch((err) => triggerError({ description: err.message }));
    // error && triggerError({ description: error.message });
  };

  useEffect(() => {
    isAuth && router.push("/profile");
  }, [isAuth]);

  return (
    <Layout>
      <UserForm
        title="Create an account"
        cta="Register"
        bottomText="Already registered?"
        link="Sign in"
        handleSubmit={registerNewUser}
        loading={loading}
        altRoute="/login"
      />
    </Layout>
  );
};

export default RegisterPage;
