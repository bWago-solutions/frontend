import "@mantine/core/styles.css";
import { theme } from "./styles/colors";
import { MantineProvider } from "@mantine/core";
import Routes from "./Routes";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes />
    </MantineProvider>
  );
}
