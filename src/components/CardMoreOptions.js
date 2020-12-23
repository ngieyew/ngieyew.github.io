import React from 'react';
import { List } from '@material-ui/core';

import CardMoreOption from './CardMoreOption';

const CardMoreOptions = (props) => {
  return (
    <List>
      {props.moreOptions.map((linkItem, index) => (
        <CardMoreOption
          linkItem={linkItem}
          moreOptionsHandler={props.moreOptionsHandler}
          key={Math.random()}
        />
      ))}
    </List>
  );
};

export default CardMoreOptions;
