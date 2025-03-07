
import { useEffect, useState } from "react";
import Snackbar from "./components/Snackbar";
import Routes from './routes'
import Loader from "./components/Loader";
import Notistack from './components/third-party/NotiStack'
import ScrollTop from "./components/ScrollTop";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
// import { JWTProvider } from "./contexts/JWTContext";


const theme = createTheme()

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // if(loading) return <Loader/>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <>
    <Notistack>
    <Routes/>
    <Snackbar/>
    </Notistack>
    </>
    </ThemeProvider>
  )
}
export default App;