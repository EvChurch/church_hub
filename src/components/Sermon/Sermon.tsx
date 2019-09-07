import { sermonsQuery_resources_nodes as sermonsQueryResourcesNodes } from '../../containers/Sermons/types/sermonsQuery';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Sermon: FC<sermonsQueryResourcesNodes> = sermon => {
  const classes = useStyles();

  return (
    <Card key={sermon.id} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sermon.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {sermon.snippet}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default Sermon;
