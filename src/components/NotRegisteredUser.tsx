import React, { useState } from "react";

import { useAppContext } from "@utils/Context";
import Layout from "./Layout";
import UserForm from "./UserForm";

const NotRegisteredUser = () => {
  const { activateAuth } = useAppContext();
  const [registered, setRegistered] = useState(true);

  const content = registered
    ? {
        title: "Sign in to enjoy all features!",
        cta: "Login",
        bottomText: "Not registered?",
        link: "Create an account",
      }
    : {
        title: "Create an account",
        cta: "Register",
        bottomText: "Already registered?",
        link: "Sign in",
      };

  return (
    <Layout>
      <UserForm
        handleSubmit={activateAuth}
        {...content}
        handleRegister={() => setRegistered((prev) => !prev)}
      />
    </Layout>
  );
};

export default NotRegisteredUser;
