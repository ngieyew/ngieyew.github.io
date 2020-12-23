import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Tabs } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  chip: { margin: theme.spacing(1) },
}));

const CardChips = (props) => {
  const classes = useStyles();

  const CardChip = (props) => {
    const {
      fullWidth,
      indicator,
      selectionFollowsFocus,
      textColor,
      item,
      ...chipProps
    } = props;
    return (
      <Chip
        label={`#${item}`}
        className={classes.chip}
        {...chipProps}
        clickable={true}
        component={RouterLink}
        to={'/latest'}
      />
    );
  };

  return (
    <Tabs value={false} variant="scrollable" scrollButtons="auto">
      {props.data.tags.map((item, index) => (
        <CardChip item={item} key={Math.random()} />
      ))}
    </Tabs>
  );
};

export default CardChips;
