import React, { ReactElement, FC } from 'react';
import Navbar from '../Navbar';
import Appbar from '../Appbar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Div100vh from 'react-div-100vh';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
    content: {
      overflowY: 'scroll',
      '-webkit-overflow-scrolling': 'touch',
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
        <div className={classes.content}>{children}</div>
      </TouchScrollable>
      <Navbar />
    </Div100vh>
  );
};

export default Wrapper;
