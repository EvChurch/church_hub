import { Container } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../containers/StepList/types/stepListQuery';
import Item from './Item';

interface Props {
  loading?: boolean;
  items?: stepListQueryStepsNodes[];
}

const StepList: FC<Props> = ({ loading, items }) => (
  <Container>
    {loading ? (
      <Item loading={true}></Item>
    ) : (
      <Fragment>
        {items &&
          items.map(step => (
            <Fragment key={step.id}>
              <Item step={step} />
            </Fragment>
          ))}
      </Fragment>
    )}
  </Container>
);

export default StepList;
