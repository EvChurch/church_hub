import React, { FC } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookIcon from '@material-ui/icons/Book';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import MapIcon from '@material-ui/icons/Map';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() =>
  createStyles({
    navigation: {
      height: 76,
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

  if (router.pathname.startsWith('/sermons')) {
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
  const [value, setValue] = React.useState(initialValue);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            router.push('/sermons');
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
      <BottomNavigationAction href="/sermons" classes={{ label: classes.label }} label="Sermons" icon={<BookIcon />} />
      <BottomNavigationAction
        href="/events"
        classes={{ label: classes.label }}
        label="Events"
        icon={<CalendarIcon />}
      />
      <BottomNavigationAction href="/discover" classes={{ label: classes.label }} label="Discover" icon={<MapIcon />} />
      <BottomNavigationAction
        href="/connect"
        classes={{ label: classes.label }}
        label="Connect"
        icon={<SupervisedUserCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
