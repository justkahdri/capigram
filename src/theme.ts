// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
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
    Heading: {
      variants: {
        brandy: {
          fontSize: "lg",
          background:
            "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      },
    },
  },
});

export default theme;
