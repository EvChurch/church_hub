import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../../containers/StepList/types/stepListQuery';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
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
      <Card className={classes.card}>
        <Skeleton className={classes.ratio16by9} variant="rect" />
      </Card>
    );
  } else if (step) {
    return (
      <Link href="/steps/[stepId]" as={`/steps/${step.id}`} passHref>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.ratio16by9} image={step.bannerUrl || undefined} />
          </CardActionArea>
        </Card>
      </Link>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Item;
