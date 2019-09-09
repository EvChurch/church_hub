import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import MapIcon from '@material-ui/icons/Map';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
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
  }),
);

const Navbar: FC = () => {
  let initialValue = 0;
  const classes = useStyles();
  const router = useRouter();

  if (router.pathname.startsWith('/series')) {
    initialValue = 0;
  }
  if (router.pathname.startsWith('/events')) {
    initialValue = 1;
  }
  if (router.pathname.startsWith('/discover')) {
    initialValue = 2;
  }
  if (router.pathname.startsWith('/connect')) {
    initialValue = 3;
  }

  const [value, setValue] = useState(initialValue);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            router.push('/series');
            break;
          case 1:
            router.push('/events');
            break;
          case 2:
            router.push('/discover');
            break;
          case 3:
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
        classes={{ label: classes.label }}
        label="Sermons"
        icon={<BookIcon />}
      />
      <BottomNavigationAction
        data-testid="events"
        href="/events"
        classes={{ label: classes.label }}
        label="Events"
        icon={<CalendarIcon />}
      />
      <BottomNavigationAction
        data-testid="discover"
        href="/discover"
        classes={{ label: classes.label }}
        label="Discover"
        icon={<MapIcon />}
      />
      <BottomNavigationAction
        data-testid="connect"
        href="/connect"
        classes={{ label: classes.label }}
        label="Connect"
        icon={<SupervisedUserCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
