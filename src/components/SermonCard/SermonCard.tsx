import { Chip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FaceIcon from '@material-ui/icons/Face';
import { Skeleton } from '@material-ui/lab';
import Link from 'next/link';
import React, { FC } from 'react';
import { sermonsQuery_resources_nodes as sermonsQueryResourcesNodes } from '../../containers/Sermons/types/sermonsQuery';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
}));

interface Props {
  loading?: boolean;
  sermon?: sermonsQueryResourcesNodes;
}

const Sermon: FC<Props> = ({ loading, sermon }) => {
  const classes = useStyles();

  if (sermon && !loading) {
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={sermon.bannerUrl || undefined} title={sermon.name} />
        <CardContent>
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
          <Typography variant="body2" color="textSecondary" component="p">
            {sermon.snippet}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="/sermons/[id]" as={`/sermons/${sermon.id}`} passHref>
            <Button component="a" size="small" color="primary">
              View
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card className={classes.card}>
        <Skeleton variant="rect" className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Skeleton height={12} width="60%" />
          <Skeleton height={6} />
          <Skeleton height={6} width="80%" />
        </CardContent>
      </Card>
    );
  }
};

export default Sermon;
