import React, { useContext, useState } from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Toolbar,
  Container,
  Hidden,
  Menu,
  MenuItem,
  Fade,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./Styles";
import { IsAuthContext } from "../AuthForm/isAuthContext";
import SignOut from "../AuthForm/SignOut";
import Logo from "./assets/img/logo.png";

const Nav = () => {
  const classes = useStyles();
  const { state } = useContext(IsAuthContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { title: `About`, path: `/about` },
    { title: `Participate`, path: `/participate` },
    { title: `Events`, path: `/events` },
    { title: `Gallery`, path: `/gallery` },
    { title: `Contact`, path: `/contact` },
  ];
  return (
    <AppBar container position="static" className={classes.nav}>
      <Toolbar>
        <Container maxWidth="xl" className={classes.navDisplayFlex}>
          <IconButton edge="start" aria-label="home">
            <img
              className={classes.logo}
              src={Logo}
              alt="Atlanta Animal Activists"
            />
          </IconButton>
          {/* ----------------Regular menu ----------------------------- */}

          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.linkDisplay}
            >
              {navLinks.map(({ title, path }) => (
                <a
                  href={path}
                  key={title}
                  className={classes.linkText}
                  style={{}}
                >
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
              <Button 
                color="secondary"
                type="submit"
                style={{ marginRight: "10px", backgroundColor:"#38393A" }}
                variant="outlined"
              >
                Donate
              </Button>
              {state.isAuth === true && <SignOut />}
              
            </List>
          </Hidden>

          {/* ----------------Hamburger menu ----------------------------- */}
          <Hidden mdUp>
            <IconButton
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {navLinks.map(({ title, path }) => (
                // <a href={path} key={title} className={classes.linkText}>
                <MenuItem href={path} onClick={handleClose} className={classes.menuSelections}>
                  {title}
                </MenuItem>
                // </a>
              ))}
              <MenuItem onClick={handleClose}>
                <Button color="primary" type="submit" fullWidth variant="contained">
                  Donate
                </Button>
              </MenuItem>
              {state.isAuth === true && <MenuItem onClick={handleClose}><SignOut /></MenuItem>}
            </Menu>
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
