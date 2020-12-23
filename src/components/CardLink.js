import React from 'react';
import { ListItem, ListItemText, ListItemIcon, Link } from '@material-ui/core';

import {
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  Instagram as InstagramIcon,
  Link as LinkIcon,
} from '@material-ui/icons';

const CardLink = (props) => {
  const actionLinkIcon = (link) => {
    let icon = <LinkIcon />;
    if (link.startsWith('https://www.facebook.com')) {
      icon = <FacebookIcon />;
    } else if (link.startsWith('https://www.youtube.com')) {
      icon = <YouTubeIcon />;
    } else if (link.startsWith('https://www.linkedin.com')) {
      icon = <LinkedInIcon />;
    } else if (link.startsWith('https://www.whatsapp.com')) {
      icon = <WhatsAppIcon />;
    } else if (link.startsWith('https://www.instagram.com')) {
      icon = <InstagramIcon />;
    }
    return icon;
  };

  return (
    <Link
      href={props.linkItem.link}
      color="inherit"
      underline="none"
      target="_blank"
      rel="noopener"
      component="a"
    >
      <ListItem button divider>
        <ListItemText primary={props.linkItem.title} />
        <ListItemIcon>{actionLinkIcon(props.linkItem.link)}</ListItemIcon>
      </ListItem>
    </Link>
  );
};

export default CardLink;
