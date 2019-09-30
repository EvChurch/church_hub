import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import ReactPlayer from 'react-player';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    ratio16by9: {
      paddingTop: '56.25%',
      position: 'relative',
    },
    player: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  }),
);

const EchoAd: FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.ratio16by9}>
        <ReactPlayer
          className={classes.player}
          url="https://www.youtube.com/watch?v=HpTTXK_ARxw"
          width="100%"
          height="100%"
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Join Us on The Echo App
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom={true}>
          We believe that prayer is a powerful and effective way for us to connect with God. Echo Prayer is a free app
          that helps you keep track of your prayers, reminds you to pray throughout the day, and lets you share prayer
          requests with others.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Download the app and add Auckland Evangelical Church as a feed.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://echoprayer.com/" target="_blank" rel="noopener" color="primary">
          Download Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default EchoAd;
