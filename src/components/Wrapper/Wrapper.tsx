import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, ReactElement } from 'react';
import Div100vh from 'react-div-100vh';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import Appbar from '../../containers/Appbar';
import Player from '../../containers/Player';
import Navbar from '../Navbar';

const useStyles = makeStyles(() =>
  createStyles({
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
  const classes = useStyles();

  return (
    <Div100vh as="main" className={classes.box}>
      <Appbar />
      <ScrollLock />
      <TouchScrollable>
        <div id="primaryContent" className={classes.content}>
          {children}
        </div>
      </TouchScrollable>
      <Player />
      <Navbar />
    </Div100vh>
  );
};

export default Wrapper;
