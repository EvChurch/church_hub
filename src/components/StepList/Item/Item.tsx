import { ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC } from 'react';
import Img from 'react-image';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../../containers/StepList/types/stepListQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      width: '100%',
    },
    listItem: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 0,
    },
    listItemText: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
    },
    ratio16by9: {
      paddingTop: '56.25%',
    },
  }),
);

interface Props {
  loading?: boolean;
  step?: stepListQueryStepsNodes;
}

const Item: FC<Props> = ({ loading, step }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <div>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Skeleton width="60%" />
      </div>
    );
  } else if (step) {
    return (
      <Link href="/steps/[stepId]" as={`/steps/${step.id}`} passHref>
        <ListItem button className={classes.listItem}>
          <Img
            className={classes.image}
            src={step.bannerUrl || undefined}
            loader={<Skeleton className={classes.ratio16by9} variant="rect"></Skeleton>}
          />
          <ListItemText primary={step.name} className={classes.listItemText} secondary={step.snippet} />
        </ListItem>
      </Link>
    );
  } else {
    return <ListItem></ListItem>;
  }
};

export default Item;
