<<<<<<< Updated upstream
const App = () => {
  return <h1>Welcome</h1>;
};

export default App;
=======
import "@mantine/core/styles.css";
import { theme } from "./styles/colors";
import { MantineProvider } from "@mantine/core";
import Routes from "./Routes";
import { BrowserRouter } from "react-router";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MantineProvider>
  );
}
>>>>>>> Stashed changes
