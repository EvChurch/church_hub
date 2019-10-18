import { Container } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { eventListQuery_events_nodes as eventListQueryEventsNodes } from '../../containers/EventList/types/eventListQuery';
import Item from './Item';

interface Props {
  loading?: boolean;
  items?: eventListQueryEventsNodes[];
}

const EventList: FC<Props> = ({ loading, items }) => (
  <Container>
    {loading ? (
      <>
        <Item loading={true} />
        <Item loading={true} />
        <Item loading={true} />
      </>
    ) : (
      <Fragment>
        {items &&
          items.map(event => (
            <Fragment key={event.id}>
              <Item event={event} />
            </Fragment>
          ))}
      </Fragment>
    )}
  </Container>
);

export default EventList;
