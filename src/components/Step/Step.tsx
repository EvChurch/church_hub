import { Container, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { FC, Fragment } from 'react';
import Img from 'react-image';
import { stepQuery_steps_nodes as stepQueryStepsNodes } from '../../containers/Step/types/stepQuery';
import ElvantoForm from '../ElvantoForm';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  ratio16by9: {
    paddingTop: '56.25%',
  },
}));

interface Props {
  loading?: boolean;
  step?: stepQueryStepsNodes;
}

const Step: FC<Props> = ({ loading, step }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <div>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Skeleton width="60%" />
        <Skeleton height={12} width="40%" />
      </div>
    );
  } else if (step) {
    return (
      <Fragment>
        <Img
          className={classes.image}
          src={step.bannerUrl || undefined}
          loader={<Skeleton variant="rect"></Skeleton>}
        />
        <Container>
          <Typography gutterBottom variant="h5" component="h2">
            {step.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {step.snippet}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {step.content}
          </Typography>
        </Container>
        {step.locationConnectionSteps.nodes &&
          step.locationConnectionSteps.nodes.map(
            connectionStep =>
              connectionStep && <ElvantoForm id={connectionStep.elvantoFormId} content={connectionStep.content} />,
          )}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Step;
