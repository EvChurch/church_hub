import { List } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../containers/StepList/types/stepListQuery';
import Item from './Item';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      padding: 0,
    },
  }),
);

interface Props {
  loading?: boolean;
  items?: stepListQueryStepsNodes[];
}

const StepList: FC<Props> = ({ loading, items }) => {
  const classes = useStyles();

  if (loading) {
    return <Item loading={true}></Item>;
  }
  return (
    <List className={classes.list} component="div">
      {items &&
        items.map(step => (
          <Fragment key={step.id}>
            <Item step={step} />
          </Fragment>
        ))}
    </List>
  );
};

export default StepList;
