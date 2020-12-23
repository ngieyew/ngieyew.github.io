import React, { useState } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  //   Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: { display: 'flex', flexGrow: 1 },
  navigationItems: { display: 'flex', flexGrow: 9, flexDirection: 'row' },
  publicItems: { display: 'flex' },
  accountItems: { display: 'flex', marginLeft: 'auto' },
  offset: theme.mixins.toolbar,
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [menuIsHide, setMenuIsHide] = useState(true);

  //   const ref = createRef();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <div className={classes.logo}>
            <Typography variant="h6">Init Card</Typography>
            {menuIsHide ? null : (
              <IconButton edge aria-label="menu" color="inherit">
                <MenuIcon />
              </IconButton>
            )}
          </div>
          <div className={classes.navigationItems}>
            <div className={classes.publicItems}>
              <Button component={RouterLink} to="/home" color="inherit">
                <Typography>Home</Typography>
              </Button>
              <Button component={RouterLink} to="/" color="inherit">
                <Typography>Card</Typography>
              </Button>
              <Button component={RouterLink} to="/latest" color="inherit">
                <Typography>Latest</Typography>
              </Button>
              <Button component={RouterLink} to="/features" color="inherit">
                <Typography>Features</Typography>
              </Button>
              <Button component={RouterLink} to="/regions" color="inherit">
                <Typography>Regions</Typography>
              </Button>
            </div>
            <div className={classes.accountItems}>
              <Button component={RouterLink} to="/account" color="inherit">
                <Typography>Account</Typography>
              </Button>
              <Button component={RouterLink} to="/login" color="inherit">
                <Typography>Login</Typography>
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default NavBar;
