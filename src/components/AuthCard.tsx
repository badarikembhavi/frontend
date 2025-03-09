import { useState } from "react";
import MainCard from "./MainCard";

import { Box } from "@mui/material";
import { MainCardProps } from "../types/root";


const AuthCard = ({children, ...other}: MainCardProps) => (
  <MainCard
  sx={{
    maxwidth: {xs: 400, md: 480},
    margin: {xs: 2.5, md: 3},
    '& > *':{
      flexGrow: 1,
      flexBasis: '50%'
    }
  }}
  content = {false}
  {...other}
  >
    <Box sx={{p:{xs: 2, sm: 3, md: 4, xl: 5}}}>{children}</Box>
  </MainCard>
)
export default AuthCard;