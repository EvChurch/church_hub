import { Grid, IconButton, Slider } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ForwardIcon from '@material-ui/icons/Forward10';
import PauseIcon from '@material-ui/icons/Pause';
import PlayIcon from '@material-ui/icons/PlayArrow';
import ReplayIcon from '@material-ui/icons/Replay10';
import { Skeleton } from '@material-ui/lab';
import { ApolloError } from 'apollo-boost';
import React, { FC, Fragment } from 'react';
import Img from 'react-image';
import { useAudio } from 'react-use';
import { playerQuery } from '../../containers/Player/types/playerQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    button: {},
    container: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      width: '100%',
    },
    image: {
      height: '57px',
    },
    content: {
      height: '57px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      flexDirection: 'column',
    },
    controls: {
      height: '57px',
      marginLeft: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
    slider: {
      position: 'absolute',
      padding: 0,
    },
    wrapText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }),
);

interface Props {
  loading?: boolean;
  error?: ApolloError;
  data?: playerQuery;
}

const Player: FC<Props> = ({ loading, error, data }) => {
  const classes = useStyles();
  const sermon = data && data.activeSermon;
  const [audio, state, controls] = useAudio({
    src: (data && data.activeSermon && data.activeSermon.audioUrl) || '',
    autoPlay: true,
  });

  if (sermon) {
    return (
      <div>
        <Slider
          className={classes.slider}
          value={state.time}
          max={state.duration}
          onChange={(_, value) => controls.seek(value as number)}
        />
        <Grid className={classes.container}>
          {audio}
          <Img
            className={classes.image}
            src={sermon.bannerUrl || undefined}
            loader={<Skeleton variant="rect"></Skeleton>}
          />
          <div className={classes.content}>
            <div className={classes.wrapText}>
              <strong>{sermon.name}</strong>
            </div>
            <div className={classes.wrapText}>{sermon.authors[0].name}</div>
          </div>
          <div className={classes.controls}>
            <IconButton className={classes.button} onClick={() => controls.seek(state.time - 10)}>
              <ReplayIcon />
            </IconButton>
            {state.paused && (
              <IconButton className={classes.button} onClick={controls.play}>
                <PlayIcon />
              </IconButton>
            )}
            {!state.paused && (
              <IconButton className={classes.button} onClick={controls.pause}>
                <PauseIcon />
              </IconButton>
            )}
            <IconButton className={classes.button} onClick={() => controls.seek(state.time + 10)}>
              <ForwardIcon />
            </IconButton>
          </div>
        </Grid>
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Player;
