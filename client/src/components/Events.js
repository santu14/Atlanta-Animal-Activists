import React from 'react';
import { Typography, Grid, Paper, Hidden } from "@material-ui/core";
import useStyles from "../components/Styles";
import Person from './assets/img/person.jpg'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const Events = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container className={classes.eventCont} >

                <Grid item xs={2} md={4} className={classes.eventLine} />
                <Grid item xs={0} md={4} />

                <Grid item xs={10} md={4} container>
                    <Paper className={classes.eventPaper} >
                        <Typography className={classes.eventTitle}>
                            Events and Updates
                        </Typography>
                        <Grid item className={classes.eventLine2} style={{ alignSelf: "left" }} />
                        <Typography item className={classes.eventText}>
                            We host many events and meet-ups throughout the year, they are regularly updated below but you can you also stay connected and up to date through our social media platforms. So if you want the lastes updates make sure to follow us on our Facebook or Twitter!
                    </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} container  >

                    <Grid item >
                        <img className={classes.person} src={Person} alt='person pets cow' />
                    </Grid>
                    <Grid item className={classes.eventLine3} />
                </Grid>
                <Grid item xs={12} container  >
                    <div className={classes.twitterContainer}>


                        <Paper className={classes.eventPaper2} >
                            <TwitterTimelineEmbed
                                sourceType="timeline"
                                id="539487832448843776"
                                borderColor="#F44336"
                                theme="dark"
                                options={{height: 400}}
                            />
                        </Paper>
                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default Events
