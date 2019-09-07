import { Button, CircularProgress, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import { Formik, FormikActions } from 'formik';
import React, { ReactElement } from 'react';
import Geosuggest from 'react-geosuggest';
import * as Yup from 'yup';

export interface Values {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  comments: string;
  prayerPoints: string;
  today: 'prc' | 'recommitment' | null;
  nextSteps: 'talk' | 'about' | 'involve' | null;
  address: string;
  about: 'visiting' | 'new' | 'home';
}

interface Props {
  onSubmit: (values: Values, formikActions: FormikActions<Values>) => void;
  loading: boolean;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ConnectForm = ({ onSubmit, loading }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        comments: '',
        prayerPoints: '',
        today: null,
        nextSteps: null,
        address: '',
        about: 'home',
      }}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        phoneNumber: Yup.number().required('Required'),
        email: Yup.string()
          .email()
          .required('Required'),
      })}
    >
      {({ values, touched, errors, isValid, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Container>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    fullWidth
                    label="First Name"
                    autoFocus
                    helperText={values.firstName && errors.firstName && touched.firstName && errors.firstName}
                    error={(errors.firstName && touched.firstName) as boolean}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    fullWidth
                    label="Last Name"
                    helperText={values.lastName && errors.lastName && touched.lastName && errors.lastName}
                    error={(errors.lastName && touched.lastName) as boolean}
                  />
                </Grid>
              </Grid>
              <TextField
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoFocus
                helperText={values.email && errors.email && touched.email && errors.email}
                error={(errors.email && touched.email) as boolean}
              />
              <TextField
                variant="outlined"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                required
                fullWidth
                label="Phone Number"
                autoFocus
                helperText={values.phoneNumber && errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                error={(errors.phoneNumber && touched.phoneNumber) as boolean}
              />
              <Geosuggest country="nz" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading || !isValid}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit'}
              </Button>
            </form>
          </Container>
        );
      }}
    </Formik>
  );
};

export default ConnectForm;
