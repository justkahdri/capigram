import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const NavBar = (props: FlexProps) => {
  const buttons = [
    { icon: AiFillHome, name: "Home", route: "/" },
    { icon: AiOutlineHeart, name: "Activity", route: "/activity" },
    { icon: BsFillPersonFill, name: "Account", route: "/profile" },
  ];
  return (
    <Flex
      justifyContent="space-evenly"
      background="white"
      {...props}
      width="100%"
      py={3}
      borderTop="solid 1px rgba(0,0,0,0.1)"
    >
      {buttons.map((btn) => (
        <Link href={btn.route} key={btn.name}>
          <a>
            <Icon
              as={btn.icon}
              aria-label={btn.name}
              boxSize="1.8rem"
              color="blackAlpha.900"
            />
          </a>
        </Link>
      ))}
    </Flex>
  );
};

export default NavBar;
