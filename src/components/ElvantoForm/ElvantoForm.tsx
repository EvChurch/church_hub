import { Container, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import uuid from 'uuid/v4';

const useStyles = makeStyles(theme => ({
  form: {
    background: 'white',
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const loadElvantoFormScript = (uniqId, id): void => {
  const existingScript = document.getElementById(uniqId);
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://aev.elvanto.com.au/form/${id}.js?el_id=${uniqId}`;
    script.id = uniqId;
    document.body.appendChild(script);
  }
};

interface Props {
  id: string;
  content: string | null;
}

const ElvantoForm: FC<Props> = ({ id, content }) => {
  const classes = useStyles();
  const uniqId = uuid();
  loadElvantoFormScript(uniqId, id);

  return (
    <Container className={classes.form}>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      <div id={`elvanto-form-${uniqId}`} />
    </Container>
  );
};

export default ElvantoForm;
