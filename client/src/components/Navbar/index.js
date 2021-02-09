import React from "react";
import { AppBar, Button, Typography, IconButton, Toolbar, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons';
import "./Navbar.css";




const Nav = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    ATLANTA ANIMAL ACTIVISTS
    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )


}
export default Nav;