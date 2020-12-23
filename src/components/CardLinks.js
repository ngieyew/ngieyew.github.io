import React from 'react';
import { List } from '@material-ui/core';

import CardLink from './CardLink';

const CardLinks = (props) => {
  return (
    <List>
      {props.data.links.map((linkItem, index) => (
        <CardLink linkItem={linkItem} key={Math.random()} />
      ))}
    </List>
  );
};

export default CardLinks;
