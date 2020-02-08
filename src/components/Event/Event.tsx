import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  AccessTime as StartAtIcon,
  LocationOnOutlined as AddressIcon,
  Subject as SnippetIcon,
} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React, { FC, Fragment } from 'react';
import Moment from 'react-moment';
import { eventQuery_events_nodes as eventQueryEventsNodes } from '../../containers/Event/types/eventQuery';
import Image from '../Image/Image';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  ratio16by9: {
    paddingTop: '56.25%',
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));

interface Props {
  loading?: boolean;
  event?: eventQueryEventsNodes;
}

const Event: FC<Props> = ({ loading, event }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Container className={classes.container}>
          <Skeleton width="60%" />
          <Skeleton height={12} width="40%" />
        </Container>
      </>
    );
  } else if (event) {
    return (
      <Fragment>
        <Image src={event.bannerUrl || undefined} />
        <Container>
          <List>
            <ListItem>
              <ListItemIcon>
                <StartAtIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography component="p">
                  <Moment format="LLLL">{event.startAt}</Moment>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <Moment to={event.endAt} ago>
                    {event.startAt}
                  </Moment>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddressIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography component="p">{event.address}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.location.name}
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SnippetIcon />
              </ListItemIcon>
              <ListItemText>
                {event.content && <div dangerouslySetInnerHTML={{ __html: event.content }} />}
              </ListItemText>
            </ListItem>
          </List>
          {event.registrationUrl && (
            <Box m={3}>
              <Button
                href={event.registrationUrl}
                variant="contained"
                target="_blank"
                rel="noopener"
                color="primary"
                size="large"
                fullWidth={true}
              >
                Register Now
              </Button>
            </Box>
          )}
        </Container>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Event;
