import React from 'react';
import { Typography, Grid, Paper, Hidden, Button } from "@material-ui/core";
import useStyles from "../components/Styles";
import Chx from './assets/img/chx.jpg'


const Participate = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container className={classes.partCont} >
                
            <Grid item xs={5} />
            <Grid item xs={7} className={classes.partLine}/>
                
                <Grid item xs={5} sm={7}  container>
                    <Paper className={classes.partPaper} >
                        <Typography className={classes.partTitle}>
                            Get Involved
                        </Typography>
                        <Hidden xsDown>
                        <Typography item  className={classes.partText}>
                    There are many ways in which you can get involved and participate in local activism. If you want to get started you can check out our events bellow, you can also make a donation. Whether it is $1 or $100, every dollar donated will go towards fueling our efforts to keep fighting for animal liberation. Some of the things you can expect to see the money going to would be equipment for our street activism such as Save Squares, Vigils, our yearly Animal Rights March and more!
                    
                    </Typography>
                    <Button className={classes.donateBtn}
                                color="secondary"
                                type="submit"
                                variant="outlined"
                            >
                                Donate
              </Button>
                    </Hidden>
                    <Grid item className={classes.partLine2}/>

                    </Paper>
                </Grid>
                <Grid item xs={7} sm={5}>
                <img className={classes.chx} src={Chx} alt='chicken'/>
                </Grid>
                <Hidden smUp>
                <Grid item xs={12} style={{ textAlign: "center", marginBottom:"40px",}} >
                <Typography item  className={classes.partText}>
                    There are many ways in which you can get involved and participate in local activism. If you want to get started you can check out our events bellow, you can also make a donation. Whether it is $1 or $100, every dollar donated will go towards fueling our efforts to keep fighting for animal liberation. Some of the things you can expect to see the money going to would be equipment for our street activism such as Save Squares, Vigils, our yearly Animal Rights March and more!
                    
                    </Typography>
                    <Button className={classes.donateBtn}
                                color="secondary"
                                type="submit"
                                variant="outlined"
                            >
                                Donate
              </Button>
                </Grid>
                </Hidden>
                
            </Grid>

        </div>
    )
}

export default Participate
