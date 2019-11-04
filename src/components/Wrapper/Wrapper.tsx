import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { get } from 'lodash/fp';
import { useRouter } from 'next/router';
import React, { FC, ReactElement, useState } from 'react';
import Div100vh from 'react-div-100vh';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import Appbar from '../../containers/Appbar';
import Player from '../../containers/Player';
import Navbar from '../Navbar';

const useStyles = makeStyles(theme =>
  createStyles({
    ratio16by9: {
      paddingTop: 150,
    },
    overlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundSize: 'cover',
    },
    cardContent: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      color: 'white',
      textAlign: 'center',
    },
    card: {
      position: 'relative',
      marginBottom: theme.spacing(2),
      borderRadius: 0,
    },
    box: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto auto',
    },
    content: {
      overflowY: 'scroll',
      '-webkit-overflow-scrolling': 'touch',
      position: 'relative',
    },
  }),
);

interface Props {
  children: ReactElement;
}

const Wrapper: FC<Props> = ({ children }: Props) => {
  const router = useRouter();
  const classes = useStyles();
  const postForm = get('query.postForm', router) === '';
  const [count] = useState(Math.floor(Math.random() * Math.floor(5)));

  return (
    <Div100vh as="main" className={classes.box}>
      <Appbar />
      <ScrollLock />
      <TouchScrollable>
        <div id="primaryContent" className={classes.content}>
          {postForm && (
            <Card className={classes.card}>
              <CardMedia className={classes.ratio16by9} image={`/static/images/church/${count}.jpg`} />
              <div className={classes.overlay} />
              <CardContent className={classes.cardContent}>
                <ThumbUpIcon />
                <Typography gutterBottom variant="h5" component="h2">
                  Thanks for filling that out!
                </Typography>
                <Typography component="p">Check out what is happening in the life of our church below.</Typography>
              </CardContent>
            </Card>
          )}
          {children}
        </div>
      </TouchScrollable>
      <Player />
      <Navbar />
    </Div100vh>
  );
};

export default Wrapper;
