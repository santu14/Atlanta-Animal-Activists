import { Typography } from '@material-ui/core';
import React from 'react'
import Bull from './assets/img/bull.jpg'
import useStyles from "./Styles";
const Jumbotron = () => {
    const classes = useStyles();
    return (
        <div className={classes.jumbotronContainer}>
            <img className={classes.bull} src={Bull} alt='bull'/>
            <Typography className={classes.jumboText}>
                ATLANTA ANIMAL ACTIVISTS
            </Typography>
            
        </div>
    )
}

export default Jumbotron
