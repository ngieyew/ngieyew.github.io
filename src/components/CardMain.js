import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import {
  Card,
  CardHeader,
  Popper,
  ClickAwayListener,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Grid,
  IconButton,
  Divider,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Link,
  Paper,
} from '@material-ui/core';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
import {
  Person as PersonIcon,
  MoreHoriz as MoreHorizIcon,
  Language as LanguageIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Message as MessageIcon,
  QrCode2 as QrCode2Icon,
  Cancel as CancelIcon,
  AddCircle as AddCircleIcon,
} from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import CardDisplayWrapper from './CardDisplayWrapper';
import CardMoreOptions from './CardMoreOptions';
import CardChips from './CardChips';
import CardLinks from './CardLinks';

import frontCard from '../assets/chinese-business-card-translation-samples-intel-445-eng.jpg';
import backCard from '../assets/chinese-business-card-translation-samples-intel-445-sch.jpg';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const styles = (theme) => ({
  dialogCloseButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  dialogAddButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  moreOptionsContainer: {
    position: 'relative',
  },
});

const CustomDialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, onAdd, ...rest } = props;
  return (
    <DialogTitle disableTypography {...rest}>
      <Typography variant="h6" component="div">
        {children}
      </Typography>
      {onAdd ? (
        <IconButton
          aria-label="close"
          onClick={onAdd}
          className={classes.dialogAddButton}
        >
          <AddCircleIcon />
        </IconButton>
      ) : null}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          className={classes.dialogCloseButton}
        >
          <CancelIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const CustomPopper = styled(Popper)({
  position: 'absolute',
});

const MoreOptionsContainer = withStyles(styles)(
  React.forwardRef((props, ref) => {
    const { classes, children, ...rest } = props;
    return (
      <Paper className={classes.moreOptionsContainer} {...rest}>
        {children}
      </Paper>
    );
  })
);

const MoreOptionsOnClick = (props) => {
  const {
    moreOptionsToggleHandler,
    popperId,
    moreOptions,
    moreOptionsIsOpen,
    anchorEl,
  } = props;
  return (
    <>
      <IconButton
        aria-describedby={popperId}
        onClick={moreOptionsToggleHandler}
        ref={anchorEl}
        disabled={moreOptionsIsOpen}
      >
        <MoreHorizIcon />
      </IconButton>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={moreOptionsToggleHandler}
      >
        <CustomPopper
          id={popperId}
          open={moreOptionsIsOpen}
          anchorEl={anchorEl}
          popperRef={anchorEl}
          placement="bottom-end"
          modifiers={[
            { name: 'flip', enabled: false },
            {
              name: 'preventOverflow',
              enabled: false,
            },
          ]}
        >
          <MoreOptionsContainer>
            <CardMoreOptions
              moreOptions={moreOptions}
              moreOptionsHandler={moreOptionsToggleHandler}
            />
          </MoreOptionsContainer>
        </CustomPopper>
      </ClickAwayListener>
    </>
  );
};

const CardMain = () => {
  const [data, setData] = useState({
    _id: 'abcd1234',
    initLink: 'chris',
    cardType: 'public',
    frontCard: frontCard,
    backCard: backCard,
    name: 'Chris Martin Lee',
    companyName: 'SomeCompany',
    position: 'Software Engineer',
    website: 'https://material-ui.com/',
    links: [
      { title: 'Like me from Facebook', link: 'https://www.facebook.com/' },
      { title: 'Subscribe me from Youtube', link: 'https://www.youtube.com/' },
      {
        title: 'See my website for more info',
        link: 'https://material-ui.com/',
      },
    ],
    tags: [
      'Semiconductor',
      'Intel',
      'Bob Swan',
      'Intel Inside',
      'Sponsors of Tomorrow',
      'Look Inside',
      "Experience What's Inside",
      'Semiconductor',
      'Intel',
      'Bob Swan',
      'Intel Inside',
      'Sponsors of Tomorrow',
      'Look Inside',
      "Experience What's Inside",
    ],
    categories: 'Hardware Manufacture',
    description:
      'Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, in Silicon Valley',
    address: ['KLCC'],
    contactPerson: {
      contactName: 'Chris Martin Lee',
      contactNumber: '+60 198765432',
      contactEmail: 'chrismartin@gmail.com',
    },
    createdBy: 'Chris Martin Lee',
    updatedBy: 'Chris Martin Lee',
    updated: new Date().toISOString(),
    created: new Date().toISOString(),
    expired: new Date().toISOString(),
  });

  const [moreOptions, setMoreOptions] = useState([
    { label: 'hide', title: 'Hide', description: 'Show Hide Options' },
    {
      label: 'block',
      title: 'Block',
      description: 'Block the selected person',
    },
    { label: 'report', title: 'Report', description: 'Show Report Options' },
  ]);

  const [cardDisplayType, setCardDisplayType] = useState('3d');
  const [expanded, setExpanded] = useState(true);
  const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookmarkIsOpen, setBookmarkIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);
  const [qrCodeIsOpen, setQRCodeIsOpen] = useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const moreOptionsToggleHandler = (event) => {
    setMoreOptionsIsOpen((prev) => !prev);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const bookmarkHandler = () => {
    setBookmarkIsOpen((prev) => !prev);
  };

  const shareHandler = () => {
    setShareIsOpen((prev) => !prev);
  };

  const qrCodeHandler = () => {
    setQRCodeIsOpen((prev) => !prev);
  };

  const bookmarkAddHandler = () => {};

  const popperId = moreOptionsIsOpen ? 'more-options-popper' : undefined;

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={8} lg={6} xl={4}>
          <Card>
            <CardHeader
              title={data.name}
              subheader={data.companyName}
              avatar={
                <RouterLink to={'/account'}>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </RouterLink>
              }
              action={
                <MoreOptionsOnClick
                  moreOptions={moreOptions}
                  popperId={popperId}
                  moreOptionsToggleHandler={moreOptionsToggleHandler}
                  moreOptionsIsOpen={moreOptionsIsOpen}
                  anchorEl={anchorEl}
                />
              }
            ></CardHeader>
            <Divider variant="middle" />
            <CardContent>
              <Typography>{data.description}</Typography>
              <CardDisplayWrapper
                data={data}
                cardDisplayType={cardDisplayType}
              />
              <CardChips data={data} />
            </CardContent>
            <CardActions disableSpacing>
              <Link
                href={data.website}
                underline="none"
                target="_blank"
                rel="noopener"
                component="a"
              >
                <IconButton aria-label="website">
                  <LanguageIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="bookmark" onClick={bookmarkHandler}>
                <BookmarkIcon />
              </IconButton>
              <Dialog
                open={bookmarkIsOpen}
                aria-labelledby="bookmark-dialog-title"
                onClose={bookmarkHandler}
              >
                <CustomDialogTitle
                  id="bookmark-dialog-title"
                  onClose={bookmarkHandler}
                  onAdd={bookmarkAddHandler}
                >
                  Bookmark
                </CustomDialogTitle>
                <DialogContent dividers>
                  <QRCode value={data.initLink} />
                </DialogContent>
              </Dialog>
              <Link
                href={`tel:+${data.contactPerson.contactNumber}`}
                underline="none"
                target="_self"
                rel="noopener"
                component="a"
              >
                <IconButton aria-label="phone">
                  <PhoneIcon />
                </IconButton>
              </Link>
              <Link
                href={`mailto:${data.contactPerson.contactEmail}`}
                underline="none"
                target="_self"
                rel="noopener"
                component="a"
              >
                <IconButton aria-label="email">
                  <EmailIcon />
                </IconButton>
              </Link>
              <Link
                href={`sms:${data.contactPerson.contactNumber}`}
                underline="none"
                target="_self"
                rel="noopener"
                component="a"
              >
                <IconButton aria-label="message">
                  <MessageIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="share" onClick={shareHandler}>
                <ShareIcon />
              </IconButton>
              <Dialog
                open={shareIsOpen}
                aria-labelledby="share-dialog-title"
                onClose={shareHandler}
              >
                <CustomDialogTitle
                  id="share-dialog-title"
                  onClose={shareHandler}
                >
                  Share
                </CustomDialogTitle>
                <DialogContent dividers>
                  <QRCode value={data.initLink} />
                </DialogContent>
              </Dialog>
              <IconButton aria-label="qr-code" onClick={qrCodeHandler}>
                <QrCode2Icon />
              </IconButton>
              <Dialog
                open={qrCodeIsOpen}
                aria-labelledby="qr-code-dialog-title"
                onClose={qrCodeHandler}
              >
                <CustomDialogTitle
                  id="qr-code-dialog-title"
                  onClose={qrCodeHandler}
                >
                  QR Code
                </CustomDialogTitle>
                <DialogContent dividers>
                  <QRCode value={data.initLink} />
                </DialogContent>
              </Dialog>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <CardLinks data={data} />
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardMain;
