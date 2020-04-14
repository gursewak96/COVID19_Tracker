import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          justify="space-between" // Add it here :)
          container
          spacing={24}
        >
          <Grid item>
            <Typography variant="h6">Covid-19</Typography>
          </Grid>

          <Grid item>
            <div>
              <Button color="inherit">
                <NavLink to="/" className={styles.link}>
                  Dashboard
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink className={styles.link} to="/info">
                  Info
                </NavLink>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
