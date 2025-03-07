import { IconButton, Theme, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { Eye } from "iconsax-react";

const StyledIconButton = styled(IconButton)({
  width: 40, // Square shape
  height: 40,
  borderRadius: 2, // Rounded edges
  border: "1px solid grey",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});
  

const Application = () => {
    // const classes = useStyles()
  return (
    <StyledIconButton>
  <Tooltip
    title="View"
    componentsProps={{
      tooltip: {
        sx: {
          bgcolor: "#0D6EFD",
          // color: "white",
        },
      },
    }}
  >
    <Eye size="32" color="red" variant="Bulk" />
  </Tooltip>
</StyledIconButton>

  );
};

export default Application;
