import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        clolor: "gray.800",
      },
    },
  },
});

export default theme;
