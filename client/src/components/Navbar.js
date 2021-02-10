import React from "react";
import { AppBar, Button, Typography, IconButton, Toolbar, } from '@material-ui/core';
import  Menu  from '@material-ui/icons/Menu';


const Nav = () => {

    return (
        <div>
            <AppBar position="sticky" >
                <Toolbar fullWidth>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" >
                        ATLANTA ANIMAL ACTIVISTS
    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )


}
export default Nav;