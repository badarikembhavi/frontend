import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Box, Container, Toolbar } from "@mui/material";

import { MenuOrientation } from "../../types/config";


const MainLayout = () =>{
    const theme = useTheme();
    const downXL = useMediaQuery(theme.breakpoints.down('xl'));
    const downLG = useMediaQuery(theme.breakpoints.down('lg'))
    return(
        <></>
    )

}
export default MainLayout;