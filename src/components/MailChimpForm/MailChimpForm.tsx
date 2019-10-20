import { Button, Container, makeStyles, TextField } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles(theme => ({
  form: {
    background: 'white',
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    display: 'block',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}));

interface Props {
  userId: string;
  audienceId: string;
  content: string | null;
}

const MailChimpForm: FC<Props> = ({ userId, audienceId, content }) => {
  const classes = useStyles();

  return (
    <Container className={classes.form}>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      <form
        action={`https://aucklandev.us9.list-manage.com/subscribe/post?u=${userId}&amp;id=${audienceId}`}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <TextField required className={classes.input} label="Email" variant="outlined" name="EMAIL" fullWidth />
        <TextField className={classes.input} label="First Name" variant="outlined" name="FNAME" fullWidth />
        <TextField className={classes.input} label="Last Name" variant="outlined" name="LNAME" fullWidth />
        <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
          <input type="text" name={`b_${userId}_${audienceId}`} value="" />
        </div>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default MailChimpForm;
