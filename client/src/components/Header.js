import React from "react";
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import useStyles from './Styles';


const Nav = () => {
    const classes = useStyles();
    return (

        <AppBar container position='static'  >
            <Toolbar >
                <Typography variant='h4' className={classes.typographyStyles} >
                    ATLANTA ANIMAL ACTIVISTS
                </Typography>
                {/* <IconButton color='inherit' aria-label='menu'>
                    <Menu />
                </IconButton> */}


            </Toolbar>
        </AppBar>

    )


}
export default Nav;