import React from 'react';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Button from 'material-ui/IconButton';
import Categories from './Categories'
import SortIcon from '@material-ui/icons/Sort'



class Sidebar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {



    return (
      <React.Fragment>
        <Button
          color="primary"
          variant="fab"
          onClick={this.toggleDrawer('left', true)}><SortIcon /></Button>


        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Categories />
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}



export default Sidebar;