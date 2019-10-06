import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import Img from 'react-image';

interface Props {
  src?: string;
  loader;
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
  }),
);

const Image: FC<Props> = ({ loader, src }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Img className={classes.image} loader={loader} src={src} />
    </div>
  );
};

export default Image;
