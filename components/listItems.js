import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import PeopleIcon from '@material-ui/icons/People';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InboxIcon from '@material-ui/icons/Inbox';
import CategoryIcon from '@material-ui/icons/Category';
import Link from '../src/Link';

export const mainListItems = (
  <div>
    <ListItem button component={Link} href="/dashboard/home">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/works">
      <ListItemIcon>
        <ArtTrackIcon />
      </ListItemIcon>
      <ListItemText primary="Works" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/about">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/messages">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/images">
      <ListItemIcon>
        <PhotoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Images" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/categories">
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>
  </div>
);