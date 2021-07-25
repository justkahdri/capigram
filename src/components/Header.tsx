import React, { useEffect, useState } from "react";
import { Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Header: React.FC = ({ children }) => {
  const [border, setBorder] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const showBorder = window.scrollY > 0;
      showBorder ? setBorder("solid 1px rgba(0,0,0,0.1)") : setBorder("");
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      py={2}
      px={5}
      position="sticky"
      top={0}
      bgColor="white"
      borderBottom={border}
    >
      <Heading
        as="h1"
        variant="brandy"
        fontSize="2xl"
        onClick={() => window.scrollTo(0, 0)}
      >
        CAPIGRAM
      </Heading>

      {children}
    </Flex>
  );
};

export default Header;
