import { Card, CardActionArea, CardMedia, Container } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { stepListQuery_steps_nodes as stepListQueryStepsNodes } from '../../containers/StepList/types/stepListQuery';
import Item from './Item';

const useStyles = makeStyles(theme =>
  createStyles({
    ratio16by9: {
      paddingTop: '56.25%',
    },
    card: {
      position: 'relative',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
);

interface Props {
  featured?: boolean;
  loading?: boolean;
  items?: stepListQueryStepsNodes[];
}

const StepList: FC<Props> = ({ featured, loading, items }) => {
  const classes = useStyles();

  return (
    <Container>
      {loading ? (
        <>
          <Item loading={true}></Item>
          <Item loading={true}></Item>
          <Item loading={true}></Item>
        </>
      ) : (
        <Fragment>
          {items &&
            items.map(step => (
              <Fragment key={step.id}>
                <Item step={step} />
              </Fragment>
            ))}
          {!featured && (
            <a href="https://echoprayerfeeds.com/auckland-evangelical-church" target="_blank" rel="noopener noreferrer">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.ratio16by9} image="/static/images/echo.jpg" />
                </CardActionArea>
              </Card>
            </a>
          )}
        </Fragment>
      )}
    </Container>
  );
};

export default StepList;
