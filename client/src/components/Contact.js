import React from 'react';
import { Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "../components/Styles";
import Eye from './assets/img/eye.jpg'


const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12}  container className={classes.contactCont} >
                <Grid item xs={2} md={3} />
                <Grid item xs={8} md={6} className={classes.contactLine} />
                <Grid item xs={2} md={3} />
                <Grid item xs={0} md={4} />
                <Grid item xs={7} md={4}container>
                    <Paper className={classes.contactPaper} >
                        <Typography className={classes.contactTitle}>
                            Contact
                        </Typography>
                        <Typography item className={classes.contactText}>
                            Reach to us via email! **link**
                            <br/>
                            Find us on social media
                    </Typography>
                    </Paper>

                    {/* icons */}

                </Grid>
                <Grid item xs={5} md={4}>
                    <img className={classes.eye} src={Eye} alt='horse eye' />
                </Grid>
                <Grid item xs={12} className={classes.contactLine} />
            </Grid>
        </div>
    )
}

export default Contact
