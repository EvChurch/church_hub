import { AppBar, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment, ReactElement } from 'react';

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
