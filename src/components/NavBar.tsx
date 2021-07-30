import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  AiFillHome,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineHome,
} from "react-icons/ai";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";

const NavBar = (props: FlexProps) => {
  const { pathname } = useRouter();
  const buttons = [
    {
      iconFilled: (filled: boolean) => (filled ? AiFillHome : AiOutlineHome),
      name: "Home",
      route: "/",
    },
    {
      iconFilled: (filled: boolean) => (filled ? AiFillHeart : AiOutlineHeart),
      name: "Activity",
      route: "/activity",
    },
    {
      iconFilled: (filled: boolean) =>
        filled ? FaUserCircle : FaRegUserCircle,
      name: "Account",
      route: "/profile",
    },
  ];

  return (
    <Flex background="white" {...props} py={3}>
      {buttons.map((btn) => (
        <Link href={btn.route} key={btn.name}>
          <a>
            <Icon
              as={btn.iconFilled(pathname == btn.route)}
              aria-label={btn.name}
              boxSize="1.8rem"
              color={
                pathname == btn.route ? "blackAlpha.900" : "blackAlpha.700"
              }
            />
          </a>
        </Link>
      ))}
    </Flex>
  );
};

export default NavBar;
