import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";

import Layout from "@components/Layout";
import ListOfCategories from "@containers/ListOfCategories";
import ListOfPosts from "@containers/ListOfPosts";

import usersByCategory from "@utils/usersByCategory";

const CategoryPage = () => {
  const router = useRouter();
  const categoryName = router.query.categoryId as string;

  const { id } = usersByCategory.find(
    (user) => user.codename === categoryName
  ) || { id: undefined };

  useEffect(() => {
    if (typeof id === "undefined") {
      router.push("/");
    }
  }, [id]);

  if (!id)
    return <Heading fontFamily="Open Sans">Redirecting to home...</Heading>;

  return (
    <Layout>
      <ListOfCategories />
      <ListOfPosts categoryId={id} />
    </Layout>
  );
};

export default CategoryPage;
