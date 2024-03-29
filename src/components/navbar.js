import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const style = {
  "&:hover": {
    fontSize: "1rem",
  },
};
function navbar() {
  return (
    <div>
      <AppBar position="static">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            bgcolor: "#14471C",
            paddingY: ".4rem",
          }}
        >
          <Button color="inherit" sx={style}>
          <Link to="/">Home</Link>
          </Button>
          <Button color="inherit" sx={style}>
          <Link to="/about"> About it</Link>
          </Button>
          <Button color="inherit" sx={{ fontSize: "1.5rem" }}>
          <Link to="/">NUTRIO</Link>
          </Button>
          <Button color="inherit" sx={style}>
          <Link to="/recommends">Recommends</Link>
          </Button>
          <Button color="inherit" sx={style}>
            <Link to="/credit">credits</Link>
          </Button>
        </Stack>
      </AppBar>
    </div>
  );
}

export default navbar;
