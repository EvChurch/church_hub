import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import React, { FC } from 'react';
import Img from 'react-image';

interface Props {
  src?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      position: 'absolute',
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
    wrapper: {
      position: 'relative',
      paddingBottom: '56.2%',
    },
    ratio16by9: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingTop: '56.25%',
    },
  }),
);

const Image: FC<Props> = ({ src }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Img className={classes.image} loader={<Skeleton className={classes.ratio16by9} variant="rect" />} src={src} />
    </div>
  );
};

export default Image;
