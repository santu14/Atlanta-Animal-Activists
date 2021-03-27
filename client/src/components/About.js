import React from 'react';
import { Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "../components/Styles";


const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container className={classes.aboutCont} >
                <Grid item xs={0} sm={2} md={3} />
                <Grid item xs={5} sm={3} md={3} >
                    <Paper className={classes.aboutPaper} >
                        <Typography className={classes.aboutTitle}>
                            About Us
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7} md={6} >
                    <Typography className={classes.aboutText}>
                        Atlanta Animal Activists is a group of people dedicated to doing monthly street activism events and help the public see and understand the plight of non-human animals and the role we all play in it. We shed light on the atrocities animals goes through every single day to be used for food, clothing, entertainment, experiments, etc. and encourage the public to transition to a vegan lifestyle so that animals are no longer abused and exploited in their name.
                    </Typography>
                </Grid>



            </Grid>

        </div>
    )
}

export default About
