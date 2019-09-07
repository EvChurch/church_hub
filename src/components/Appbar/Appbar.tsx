import React, { ReactElement, Fragment, FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    appbar: {
      backgroundColor: '#fff',
    },
    logo: {
      width: 45,
    },
  }),
);

const Appbar: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appbar} position="static" color="default">
        <Toolbar>
          <img className={classes.logo} src="/static/images/icon.png" />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Appbar;
