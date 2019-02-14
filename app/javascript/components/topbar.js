import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import KitchenIcon from "@material-ui/icons/Kitchen";

import Emoji from "./utils/emoji";

const Topbar = ({ classes, handleDrawerOpen, handleRefresh }) => (
  <AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" color="inherit">
        <Emoji symbol="😋" /> RECIPES OF THE DAY
      </Typography>
      <IconButton color="inherit" onClick={handleDrawerOpen}>
        <KitchenIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Topbar;
