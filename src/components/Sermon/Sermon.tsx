import { Button, Chip, Container, makeStyles, Typography } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FaceIcon from '@material-ui/icons/Face';
import HeadsetIcon from '@material-ui/icons/Headset';
import { Skeleton } from '@material-ui/lab';
import { ApolloError } from 'apollo-boost';
import clsx from 'clsx';
import React, { FC, Fragment } from 'react';
import Img from 'react-image';
import {
  sermonQuery,
  sermonQuery_resources_nodes as sermonQueryResourcesNodes,
} from '../../containers/Sermon/types/sermonQuery';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

interface Props {
  loading?: boolean;
  error?: ApolloError;
  data?: sermonQuery;
  onListenClick?: (sermon: sermonQueryResourcesNodes) => void;
}

const Sermon: FC<Props> = ({ loading, error, data, onListenClick }) => {
  const classes = useStyles();
  const sermon = data && data.resources && data.resources.nodes && data.resources.nodes[0];

  if (loading) {
    return <Fragment>LOADING</Fragment>;
  } else if (error) {
    return <Container>{error.graphQLErrors.map(error => error.message)}</Container>;
  } else if (sermon) {
    return (
      <Fragment>
        <Img
          className={classes.image}
          src={sermon.bannerUrl || undefined}
          loader={<Skeleton variant="rect"></Skeleton>}
        />
        <Container>
          <Typography gutterBottom variant="h5" component="h2">
            {sermon.name}
          </Typography>
          {sermon.authors.map(author => (
            <Chip key={author.id} size="small" icon={<FaceIcon />} label={author.name} className={classes.chip} />
          ))}
          {sermon.scriptures.map(scripture => (
            <Chip
              key={scripture.id}
              size="small"
              icon={<BookmarkIcon />}
              label={scripture.name}
              className={classes.chip}
            />
          ))}
          {sermon.topics.map(topic => (
            <Chip key={topic.id} size="small" label={topic.name} className={classes.chip} />
          ))}
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth={true}
            onClick={() => onListenClick && onListenClick(sermon)}
          >
            <HeadsetIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
            Listen
          </Button>
          <Typography variant="body2" color="textSecondary" component="p">
            {sermon.snippet}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {sermon.content}
          </Typography>
        </Container>
      </Fragment>
    );
  } else {
    return <Fragment>NOT FOUND</Fragment>;
  }
};

export default Sermon;
