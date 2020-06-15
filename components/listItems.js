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
import ShareIcon from '@material-ui/icons/Share';
import Link from '../src/Link';

export const mainListItems = (
  <div>
    <ListItem button component={Link} href="/dashboard/home" naked activeClassName="active">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/works" naked activeClassName="active">
      <ListItemIcon>
        <ArtTrackIcon />
      </ListItemIcon>
      <ListItemText primary="Proyectos" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/about" naked activeClassName="active">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sobre mi" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/messages" naked activeClassName="active">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Mensajes" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/images" naked activeClassName="active">
      <ListItemIcon>
        <PhotoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Imagenes" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/categories" naked activeClassName="active">
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItem>
    <ListItem button component={Link} href="/dashboard/social-networks" naked activeClassName="active">
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemText primary="Redes sociales" />
    </ListItem>
  </div>
);