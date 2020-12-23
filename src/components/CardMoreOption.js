import React from 'react';
import {
  ListItem,
  ListItemText,
  Link,
  Avatar,
  ListItemAvatar,
} from '@material-ui/core';

import {
  VisibilityOff as VisibilityOffIcon,
  Close as CloseIcon,
  Report as ReportIcon,
  Link as LinkIcon,
} from '@material-ui/icons';

const CardMoreOption = (props) => {
  const actionLink = (label) => {
    if (label === 'hide') {
      return <VisibilityOffIcon />;
    } else if (label === 'block') {
      return <CloseIcon />;
    } else if (label === 'report') {
      return <ReportIcon />;
    } else {
      return <LinkIcon />;
    }
  };

  return (
    <li>
      <Link
        color="inherit"
        underline="none"
        target="_blank"
        rel="noopener"
        component="a"
        onClick={props.moreOptionsHandler}
      >
        <ListItem button divider>
          <ListItemAvatar>
            <Avatar>{actionLink(props.linkItem.label)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.linkItem.title}
            secondary={props.linkItem.description}
          />
        </ListItem>
      </Link>
    </li>
  );
};

export default CardMoreOption;
