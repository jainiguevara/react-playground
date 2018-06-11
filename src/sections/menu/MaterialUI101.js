import React from 'react'
//  import compose from 'lodash/fp/compose';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton } from '@material-ui/core'
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons'

//  to integrate later
//  import { translate } from 'react-i18next';
//  import LanguageSelection from '../../components/utility/LanguageSelection'

import mainMenuListItems from './../LeftDrawerData'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

class MaterialUI101 extends React.Component {
    state = {
      open: false,
    };
      handleDrawerOpen = () => {
        this.setState({ open: true })
      }
      handleDrawerClose = () => {
        this.setState({ open: false })
      }
      render () {
        const { classes, theme } = this.props

        return (
          <div className={classes.root}>
            <AppBar position="absolute"
              className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
              >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, this.state.open && classes.hide)}
                >
                  <Menu />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  Mini variant drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose),
                }}
              open={this.state.open}
              >
              <div className={classes.toolbar}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                </IconButton>
              </div>
              <Divider />
              <List>{mainMenuListItems}</List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
          </div>
        )
      }
}

MaterialUI101.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MaterialUI101)
