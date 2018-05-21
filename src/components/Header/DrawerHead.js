import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { IconButton, Drawer } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons'
import Search from './Search'

const styles = theme => ({
  drawerPaper: {
    height: 50,
    background: theme.palette.primary.main,
    justifyContent: 'center',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}'
  },
});


class DrawerHead extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;





    return (
      <div>

        <IconButton
          color='inherit'
          onClick={this.toggleDrawer('right', true)}>
          <SearchIcon />
        </IconButton>

        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div
            tabIndex={0}
            role="button"
          >
            <Search />
          </div>
        </Drawer>
      </div>
    );
  }
}



export default withStyles(styles)(DrawerHead);