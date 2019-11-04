import { Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { eventListQuery_events_nodes as eventListQueryEventsNodes } from '../../containers/EventList/types/eventListQuery';
import Item from './Item';

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
);

interface Props {
  loading?: boolean;
  items?: eventListQueryEventsNodes[];
  featured?: boolean;
}

const EventList: FC<Props> = ({ loading, items, featured }) => {
  const classes = useStyles();

  return (
    <Container>
      {loading ? (
        <>
          <Item loading={true} />
          <Item loading={true} />
          <Item loading={true} />
        </>
      ) : (
        <>
          {featured && items && items.length > 0 && (
            <Typography className={classes.title} variant="h6" component="h2">
              Upcoming Events
            </Typography>
          )}
          {items &&
            items.map(event => (
              <Fragment key={event.id}>
                <Item event={event} />
              </Fragment>
            ))}
        </>
      )}
    </Container>
  );
};

export default EventList;
