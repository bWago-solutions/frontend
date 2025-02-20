import { Button, Group, useMantineTheme } from "@mantine/core";

const Routes = () => {
  const theme = useMantineTheme();
  const color = theme.colors.myColor[4];
  return (
    <Group>
      <Button color={color}>Hello Boy</Button>
      <Button color={color}>Hello Boy</Button>
      <Button color={color}>Hello Boy</Button>
    </Group>
  );
};
export default Routes;
