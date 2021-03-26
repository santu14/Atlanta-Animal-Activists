import { Typography , Grid} from '@material-ui/core';
import React from 'react'
import Bull from './assets/img/bull.jpg'
import useStyles from "./Styles";
const Jumbotron = () => {
    const classes = useStyles();
    return (
        <div>
           <Grid item xs={12}   className={classes.jumbotronContainer} container>
           
            <img className={classes.bull} src={Bull} alt='bull'/>
            <Typography className={classes.jumboText}>
                ATLANTA ANIMAL ACTIVISTS
            </Typography>
            </Grid>
        </div>
        
    )
}

export default Jumbotron
