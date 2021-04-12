import React from 'react';
import { Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "../components/Styles";
import Eye from './assets/img/eye.jpg';
import Fb from './assets/img/fb.png';
import Ig from './assets/img/ig.png';
import Tw from './assets/img/tw.png';



const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container className={classes.contactCont} >
                <Grid item xs={2} md={3} />
                <Grid item xs={8} md={6} className={classes.contactLine} />
                <Grid item xs={2} md={3} />
                <Grid item xs={0} sm={2} md={4} />
                <Grid item xs={7} sm={5} md={4} container>
                    <Paper className={classes.contactPaper} >
                        <Typography className={classes.contactTitle}>
                            Contact
                        </Typography>
                        <Typography item className={classes.contactText}>
                            Reach to us via email! **link**
                            <br />
                            Find us on social media

                        </Typography>
                        <br />
                        <img className={classes.icon} src={Fb} alt='facebook' />
                        <img className={classes.icon} src={Ig} alt='facebook' />
                        <img className={classes.icon} src={Tw} alt='facebook' />

                    </Paper>

                    {/* icons */}

                </Grid>
                <Grid item xs={5} sm={5} md={4}>
                    <img className={classes.eye} src={Eye} alt='horse eye' />
                </Grid>
                <Grid item xs={12} className={classes.contactLine} />
            </Grid>
        </div>
    )
}

export default Contact
