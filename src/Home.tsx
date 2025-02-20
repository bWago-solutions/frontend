import { Button, useMantineTheme } from "@mantine/core";

const Home = () => {
  const theme = useMantineTheme();
  const color = theme.colors.myColor[5];
  return <Button color={color}>Bienvenu!</Button>;
};
export default Home;
