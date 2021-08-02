import React from "react";

import NotRegisteredUser from "@components/NotRegisteredUser";
import ListOfFavs from "@containers/ListOfFavs";

import { useAppContext } from "@utils/Context";
import SectionLayout from "@components/SectionLayout";

const ActivityPage = () => {
  const { isAuth } = useAppContext();

  if (!isAuth) return <NotRegisteredUser />;

  return (
    <SectionLayout title="Activity">
      <ListOfFavs />
    </SectionLayout>
  );
};

export default ActivityPage;
