import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Search } from "@mui/icons-material";

import useStyle from "./styles";

const Header = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore New Place
            </Typography>
            {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search ..."
                classes={{
                  input: classes.inputInput,
                  root: classes.inputRoot,
                }}
              />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
