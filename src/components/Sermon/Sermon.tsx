import { AppBar, Button, Chip, Container, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FaceIcon from '@material-ui/icons/Face';
import HeadsetIcon from '@material-ui/icons/Headset';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';
import React, { ChangeEvent, FC } from 'react';
import { sermonQuery_resources_nodes as sermonQueryResourcesNodes } from '../../containers/Sermon/types/sermonQuery';
import Editor from '../Editor';
import Image from '../Image';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
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
  ratio16by9: {
    paddingTop: '56.25%',
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

interface Props {
  loading?: boolean;
  sermon?: sermonQueryResourcesNodes;
  onListenClick?: (sermon: sermonQueryResourcesNodes) => void;
}

enum TabState {
  Details = 0,
  SermonNotes,
  ConnectGroupNotes,
}

const Sermon: FC<Props> = ({ loading, sermon, onListenClick }) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(TabState.Details);

  const handleChange = (_event: ChangeEvent<{}>, newTab: number): void => {
    setTab(newTab);
  };

  if (loading) {
    return (
      <div>
        <Skeleton className={classes.ratio16by9} variant="rect" />
        <Container className={classes.container}>
          <Skeleton width="60%" />
          <Skeleton height={12} width="40%" />
        </Container>
      </div>
    );
  } else if (sermon) {
    return (
      <>
        <Image src={sermon.bannerUrl || undefined} />
        <AppBar position="sticky">
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Details" />
            <Tab label="Sermon Notes" />
            {/* <Tab label="CG Notes" /> */}
          </Tabs>
        </AppBar>
        <Container className={classes.container}>
          {(() => {
            switch (tab) {
              case TabState.Details:
                return (
                  <div key={TabState.Details}>
                    {sermon.authors.map(author => (
                      <Chip
                        key={author.id}
                        size="small"
                        icon={<FaceIcon />}
                        label={author.name}
                        className={classes.chip}
                      />
                    ))}
                    {sermon.connectionScriptures.map(connectionScripture => (
                      <Chip
                        key={connectionScripture.id}
                        size="small"
                        icon={<BookmarkIcon />}
                        label={`${connectionScripture.scripture.name} ${connectionScripture.range}`}
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
                    {sermon.connectionScriptures.map(connectionScripture => (
                      <div
                        key={connectionScripture.id}
                        dangerouslySetInnerHTML={{ __html: connectionScripture.content }}
                      ></div>
                    ))}
                  </div>
                );
              case TabState.SermonNotes:
                return (
                  <div key={TabState.SermonNotes}>
                    <Editor id={`${sermon.id}-sermon-notes`} content={sermon.sermonNotes || ''}></Editor>
                  </div>
                );
              case TabState.ConnectGroupNotes:
                return (
                  <div key={TabState.ConnectGroupNotes}>
                    <Editor id={`${sermon.id}-connect-group-notes`} content={sermon.connectGroupNotes || ''}></Editor>
                  </div>
                );
            }
          })()}
        </Container>
      </>
    );
  } else {
    return <></>;
  }
};

export default Sermon;
