import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import AuthBackground from "../assests/Images/AuthBackground";
import AuthCard from "./AuthCard";

interface Props {
  children: ReactNode;
}

const AuthWrapper = ({ children }: Props) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto", 
      px: 2,
    }}
  >
    <AuthBackground />
    <Grid container justifyContent="center">
      <Grid item>
        <AuthCard
          sx={{
            maxWidth: 400, // Restricts form width
            width: "100%", // Keeps it responsive
            p: 3,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {children}
        </AuthCard>
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
