import React, { ReactElement, Fragment, FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, AppBar } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    appbar: {
      marginTop: -45,
      paddingTop: 45,
    },
  }),
);

const Appbar: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography align="center" variant="h6" display="block">
            Auckland Ev
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Appbar;
