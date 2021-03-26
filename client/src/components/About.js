import React from 'react';
import { Grid , Paper} from "@material-ui/core";
import useStyles from "../components/Styles";


const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container >
<Grid item xs={0} sm={2} md={3} />
<Grid item xs={6} sm={3} md={3} >
<Paper className={classes.aboutPaper} variant="contained">
            About      
 </Paper>
 </Grid>
<Grid item xs={6} sm={7} md={6} />



            </Grid>
            
        </div>
    )
}

export default About
