import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "@components/Layout";
import ListOfCategories from "@containers/ListOfCategories";
import ListOfPosts from "@containers/ListOfPosts";

const CategoryPage = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;

  const Animals = ["cats", "dogs", "hamsters", "rabbits", "birds", "fishes"]; // Not the perfect solution... but it works

  useEffect(() => {
    if (isNaN(Animals.indexOf(categoryId) + 1)) {
      router.push("/");
    }
  }, [categoryId]);

  return (
    <Layout>
      <ListOfCategories />
      <ListOfPosts categoryId={Animals.indexOf(categoryId) + 1} />
    </Layout>
  );
};

export default CategoryPage;
