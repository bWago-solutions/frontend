import { Button, Group, useMantineTheme } from "@mantine/core";
import { Route, Routes } from "react-router";
import Home from "./Home";

const Routing = () => {
  const theme = useMantineTheme();
  const color = theme.colors.myColor[4];
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default Routing;
