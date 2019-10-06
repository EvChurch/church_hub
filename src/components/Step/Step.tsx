import { AppBar, Container, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { ChangeEvent, FC, Fragment } from 'react';
import { stepQuery_steps_nodes as stepQueryStepsNodes } from '../../containers/Step/types/stepQuery';
import ElvantoForm from '../ElvantoForm';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
  ratio16by9: {
    paddingTop: '56.25%',
  },
  appBar: {
    marginTop: -5,
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));

interface Props {
  loading?: boolean;
  step?: stepQueryStepsNodes;
}

const Step: FC<Props> = ({ loading, step }) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleChange = (_event: ChangeEvent<{}>, newTab: number): void => {
    setTab(newTab);
  };

  if (loading) {
    return (
      <Fragment>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Container className={classes.container}>
          <Skeleton width="60%" />
          <Skeleton height={12} width="40%" />
        </Container>
      </Fragment>
    );
  } else if (step) {
    const connectionStep = step.locationConnectionSteps.nodes && step.locationConnectionSteps.nodes[tab];
    return (
      <Fragment>
        <Image src={step.bannerUrl || undefined} loader={<Skeleton variant="rect"></Skeleton>} />
        {step.locationConnectionSteps.nodes && step.locationConnectionSteps.nodes.length > 1 && (
          <AppBar position="static" className={classes.appBar}>
            <Tabs value={tab} onChange={handleChange}>
              {step.locationConnectionSteps.nodes &&
                step.locationConnectionSteps.nodes.map(connectionStep => {
                  return connectionStep && <Tab key={connectionStep.id} label={connectionStep.location.name} />;
                })}
            </Tabs>
          </AppBar>
        )}
        <Container className={classes.container}>
          <Typography variant="body2" color="textSecondary" component="p">
            {step.snippet}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {step.content && <div dangerouslySetInnerHTML={{ __html: step.content }} />}
          </Typography>
        </Container>
        {connectionStep && <ElvantoForm id={connectionStep.elvantoFormId} content={connectionStep.content} />}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Step;
