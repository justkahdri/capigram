import { useEffect, useState } from "react";

import getData from "../utils/getData";

const useCategoriesData = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getData("https://capigram-server.vercel.app/categories").then((res) => {
      setCategories(res);
      setLoading(false);
    });
  }, [getData]);

  return { categories, loading };
};

export default useCategoriesData;
