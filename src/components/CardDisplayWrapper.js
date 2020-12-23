import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';

import Card3d from './Card3d';

const useStyles = makeStyles((theme) => ({
  twoDNameCard: {
    width: '100%',
  },
}));

const CardDisplayWrapper = (props) => {
  const [tabValue, setTabValue] = useState('one');
  const classes = useStyles();

  const tabChangeHandler = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  let CardDisplay;
  if (props.cardDisplayType === '3d') {
    CardDisplay = <Card3d data={props.data} />;
  } else if (props.display === '2d') {
    CardDisplay = (
      <>
        <AppBar position="static" width="100%">
          <Tabs
            value={tabValue}
            onChange={tabChangeHandler}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab value="one" label="2D Name Card Front"></Tab>
            <Tab value="two" label="2D Name Card Back"></Tab>
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index="one">
          <img
            src={props.data.frontCard}
            alt="alternate front card"
            className={classes.twoDNameCard}
          />
        </TabPanel>
        <TabPanel value={tabValue} index="two">
          <img
            src={props.data.backCard}
            alt="alternate back card"
            className={classes.twoDNameCard}
          />
        </TabPanel>
      </>
    );
  } else {
    CardDisplay = (
      <>
        <AppBar position="static" width="100%">
          <Tabs
            value={tabValue}
            onChange={tabChangeHandler}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab value="one" label="3D Name Card"></Tab>
            <Tab value="two" label="2D Name Card Front"></Tab>
            <Tab value="three" label="2D Name Card Back"></Tab>
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index="one">
          <Card3d />
        </TabPanel>
        <TabPanel value={tabValue} index="two">
          <img
            src={props.data.frontCard}
            alt="alternate front card"
            className={classes.twoDNameCard}
          />
        </TabPanel>
        <TabPanel value={tabValue} index="three">
          <img
            src={props.data.backCard}
            alt="alternate back card"
            className={classes.twoDNameCard}
          />
        </TabPanel>
      </>
    );
  }

  return CardDisplay;
};

export default CardDisplayWrapper;
