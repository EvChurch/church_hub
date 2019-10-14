import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  CalendarToday as EventsIcon,
  Map as DiscoverIcon,
  SupervisedUserCircle as ConnectIcon,
  Whatshot as SermonIcon,
} from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    navigation: {
      height: 76,
      borderTop: '1px #ccc solid',
    },
    label: {
      paddingTop: '2px',
      fontSize: '0.75rem !important',
    },
    root: {
      minWidth: 0,
    },
  }),
);

enum RouterState {
  Series,
  Events,
  Steps,
  Connect,
}

const Navbar: FC = () => {
  let initialValue = 0;
  const classes = useStyles();
  const router = useRouter();

  if (router.pathname.startsWith('/series')) {
    initialValue = RouterState.Series;
  }
  if (router.pathname.startsWith('/events')) {
    initialValue = RouterState.Events;
  }
  if (router.pathname.startsWith('/steps')) {
    initialValue = RouterState.Steps;
  }
  if (router.pathname.startsWith('/connect')) {
    initialValue = RouterState.Connect;
  }

  const [value, setValue] = useState(initialValue);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case RouterState.Series:
            router.push('/series');
            break;
          case RouterState.Events:
            router.push('/events');
            break;
          case RouterState.Steps:
            router.push('/steps');
            break;
          case RouterState.Connect:
            router.push('/connect');
            break;
        }
        event.preventDefault();
      }}
      showLabels
      className={classes.navigation}
    >
      <BottomNavigationAction
        data-testid="sermons"
        href="/series"
        classes={{ root: classes.root, label: classes.label }}
        label="Sermons"
        icon={<SermonIcon />}
      />
      <BottomNavigationAction
        data-testid="events"
        href="/events"
        classes={{ root: classes.root, label: classes.label }}
        label="Events"
        icon={<EventsIcon />}
      />
      <BottomNavigationAction
        data-testid="steps"
        href="/steps"
        classes={{ root: classes.root, label: classes.label }}
        label="Discover"
        icon={<DiscoverIcon />}
      />
      <BottomNavigationAction
        data-testid="connect"
        href="/connect"
        classes={{ root: classes.root, label: classes.label }}
        label="Connect"
        icon={<ConnectIcon />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
