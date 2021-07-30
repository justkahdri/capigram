import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "@components/Layout";
import ListOfCategories from "@containers/ListOfCategories";
import ListOfPosts from "@containers/ListOfPosts";

const CategoryPage = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId as any;

  enum Animals {
    "cats" = 1,
    "dogs",
    "hamsters",
    "rabbits",
    "birds",
    "fishes",
  } // Not the perfect solution... but it works

  useEffect(() => {
    if (Number(Animals[categoryId]) === NaN) {
      router.push("/");
    }
  }, [categoryId]);

  return (
    <Layout>
      <ListOfCategories />
      <ListOfPosts categoryId={Number(Animals[categoryId])} />
    </Layout>
  );
};

export default CategoryPage;
