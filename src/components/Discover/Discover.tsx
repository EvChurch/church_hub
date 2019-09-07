import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }),
);

const Discover: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/explaining-christianity.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Explaining Christianity
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    It&apos;s a simple, clear, 4 week course that assumes nothing and lets you ask anything! Over
                    dessert and hot drinks come join us as we put Jesus and his claims under the microscope.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/newish-connect.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Newish Connect
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Newish Connect is a group that runs for five weeks every Wednesday night. It&apos;s the best place
                    to meet and connect in with others from church as you find out about what we value and where
                    we&apos;re heading.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/connect-group.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Connect Group
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    These are smaller mid-week Bible studies where we come together to explore God’s word and what it
                    means for our everyday lives. We get to know a bunch of people and share our lives with them; it’s
                    the best way we can help each other to grow to be more like Jesus.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/join-a-team.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Join a Team
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    We offer a variety of ways of partnering with us, all focused on being captivated by Christ,
                    grounded in the gospel, and growing in maturity and number! We are excited that you would consider
                    serving with us as partners in the gospel.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/get-baptised.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Get Baptised
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Thinking about getting baptised? Let us know.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/next-step.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    What is my next step?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    If you find yourself unsure of what your next step is, that’s okay! We would love to get in touch
                    with you to help you identify what that next step might be.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Connect
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Discover;
