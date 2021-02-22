import React, {useContext} from "react";
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import useStyles from './Styles';
import { IsAuthContext } from "../AuthForm/isAuthContext";
import SignOut from "../AuthForm/signOut";

const Nav = () => {
    const classes = useStyles();
    const {state, checkAuth} = useContext(IsAuthContext);
    return (

        <AppBar container position='static'  >
            <Toolbar >
                <Typography variant='h4' className={classes.typographyStyles} >
                    ATLANTA ANIMAL ACTIVISTS
                </Typography>
                {/* <IconButton color='inherit' aria-label='menu'>
                    <Menu />
                </IconButton> */}
                { state.isAuth === true && <SignOut/>}
                

            </Toolbar>
        </AppBar>

    )


}
export default Nav;