import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { SidebarProvider } from "./contexts/SidebarContext";
import ThemeRoutes from "./routes";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SidebarProvider>
        <ThemeRoutes />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
