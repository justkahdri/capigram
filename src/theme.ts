// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "Satisfy",
    body: "Open Sans",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      500: "orange",
      900: "#1a202c",
    },
  },
  components: {
    // IconButton: {
    //   variants: {
    //     "navbar-icon": ({ colorScheme = "brand" }) => ({
    //       color: `${colorScheme}.500`,
    //       bgColor: "red",
    //       boxSize: "2rem",
    //     }),
    //   },
    // },
  },
});

export default theme;
