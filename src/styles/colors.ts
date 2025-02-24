import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#fff6e4",
  "#f9ebd3",
  "#efd6ab",
  "#e5c07e",
  "#ddac59",
  "#d8a040",
  "#d69a32",
  "#bd8624",
  "#a9761c",
  "#93650f",
];

export const theme = createTheme({
  colors: {
    myColor,
  },
});
