import React from "react";
import Layout from "../components/Layout";
import ListOfCategories from "../containers/ListOfCategories";
import ListOfPosts from "../containers/ListOfPosts";

const Home = () => {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPosts />
    </Layout>
  );
};

export default Home;
