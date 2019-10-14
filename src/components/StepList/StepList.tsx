import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import React, { FC, Fragment, useState } from 'react';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../containers/StepList/types/stepListQuery';
import Item from './Item';

const useStyles = makeStyles(theme =>
  createStyles({
    ratio16by9: {
      paddingTop: '56.25%',
    },
    overlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      top: '0',
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5))',
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
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
);

interface Props {
  loading?: boolean;
  items?: stepListQueryStepsNodes[];
  postForm?: boolean;
}

const StepList: FC<Props> = ({ postForm, loading, items }) => {
  const classes = useStyles();
  const [count] = useState(Math.floor(Math.random() * Math.floor(5)));

  return (
    <Container>
      {postForm && (
        <Card className={classes.card}>
          <CardMedia className={classes.ratio16by9} image={`/static/images/church/${count}.jpg`} />
          <div className={classes.overlay} />
          <CardContent className={classes.cardContent}>
            <Typography variant="h1" component="h2">
              <ThumbUpIcon />
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Thanks for filling that out!
            </Typography>
            <Typography variant="body2" component="p">
              Check out some useful next steps below.
            </Typography>
          </CardContent>
        </Card>
      )}
      {loading ? (
        <Item loading={true}></Item>
      ) : (
        <Fragment>
          {items &&
            items.map(step => (
              <Fragment key={step.id}>
                <Item step={step} />
              </Fragment>
            ))}
          <a href="https://echoprayerfeeds.com/auckland-evangelical-church" target="_blank" rel="noopener noreferrer">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.ratio16by9} image="/static/images/echo.jpg" />
              </CardActionArea>
            </Card>
          </a>
        </Fragment>
      )}
    </Container>
  );
};

export default StepList;
