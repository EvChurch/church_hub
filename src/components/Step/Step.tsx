import { AppBar, Box, Button, Container, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { ChangeEvent, FC, Fragment } from 'react';
import { stepQuery_steps_nodes as stepQueryStepsNodes } from '../../containers/Step/types/stepQuery';
import ElvantoForm from '../ElvantoForm';
import Image from '../Image';
import MailChimpForm from '../MailChimpForm';

const useStyles = makeStyles(theme => ({
  ratio16by9: {
    paddingTop: '56.25%',
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
        <Image src={step.bannerUrl || undefined} />
        {step.locationConnectionSteps.nodes && step.locationConnectionSteps.nodes.length > 1 && (
          <AppBar position="sticky">
            <Tabs value={tab} onChange={handleChange}>
              {step.locationConnectionSteps.nodes &&
                step.locationConnectionSteps.nodes.map(connectionStep => {
                  return connectionStep && <Tab key={connectionStep.id} label={connectionStep.location.name} />;
                })}
            </Tabs>
          </AppBar>
        )}
        <Container className={classes.container}>
          <Typography component="div">
            {step.content && <div dangerouslySetInnerHTML={{ __html: step.content }} />}
          </Typography>
          {connectionStep && connectionStep.fluroFormUrl && (
            <Box mt={2}>
              <Button
                href={connectionStep.fluroFormUrl}
                target="_blank"
                rel="noopener"
                color="primary"
                variant="contained"
              >
                Open Form
              </Button>
            </Box>
          )}
        </Container>
        {connectionStep && connectionStep.elvantoFormId && (
          <ElvantoForm id={connectionStep.elvantoFormId} content={connectionStep.content} />
        )}
        {connectionStep && connectionStep.mailChimpUserId && connectionStep.mailChimpAudienceId && (
          <MailChimpForm
            userId={connectionStep.mailChimpUserId}
            audienceId={connectionStep.mailChimpAudienceId}
            content={connectionStep.content}
          />
        )}
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Step;
