import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/ArrowBack';
import { get } from 'lodash/fp';
import Link from 'next/link';
import React, { FC, ReactElement } from 'react';
import { appbarQuery } from '../../containers/Appbar/types/appbarQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    button: {},
    appbar: {
      backgroundColor: '#fff',
    },
    toolbar: {
      padding: 0,
    },
    logo: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 45,
    },
  }),
);

interface Props {
  data?: appbarQuery;
}

const Appbar: FC<Props> = ({ data }): ReactElement => {
  const classes = useStyles();
  const parentHref = get('activeRoute.parentHref', data) || null;
  const parentAs = get('activeRoute.parentAs', data) || null;
  return (
    <AppBar className={classes.appbar} position="static" color="default">
      <Toolbar className={classes.toolbar}>
        {parentHref === null ? (
          <img className={classes.logo} src="/static/images/icon.png" />
        ) : (
          <Link href={parentHref} as={parentAs} passHref>
            <IconButton className={classes.button}>
              <BackIcon />
            </IconButton>
          </Link>
        )}
        <Typography variant="h6" component="h2">
          {data && data.activeRoute && data.activeRoute.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
