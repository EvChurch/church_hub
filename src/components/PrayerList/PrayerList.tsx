import { Container } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { prayerListQuery_prayers_nodes as prayerListQueryPrayersNodes } from '../../containers/PrayerList/types/prayerListQuery';
import Item from './Item';

interface Props {
  loading?: boolean;
  items?: prayerListQueryPrayersNodes[];
}

const PrayerList: FC<Props> = ({ loading, items }) => (
  <Container>
    {loading ? (
      <Item loading={true}></Item>
    ) : (
      <Fragment>
        {items &&
          items.map(prayer => (
            <Fragment key={prayer.id}>
              <Item prayer={prayer} />
            </Fragment>
          ))}
      </Fragment>
    )}
  </Container>
);

export default PrayerList;
