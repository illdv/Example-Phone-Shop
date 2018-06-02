import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, Tooltip } from '@material-ui/core';
import {PermDeviceInformation} from '@material-ui/icons'
import RightPanel from './RightPanel'
import LocalizedText from '../../translate/localized-text'


const styles = theme => ({
  drawerPaper: {
		height: 'auto',
		width: '70%',
    background: theme.palette.background.paper,
    justifyContent: 'center',
		top: 83.99,
    bottom: 161.97,
  },
});


class DrawerParams extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, phone } = this.props;
    return (
      <div>
<Tooltip  placement="left" title={<LocalizedText>look params</LocalizedText>}>
        <IconButton
          color='inherit'
          onClick={this.toggleDrawer('right', true)}>
          <PermDeviceInformation />
        </IconButton>
</Tooltip>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div
            tabIndex={0}
          >
          {  <RightPanel phone={phone} />}
          </div>
        </Drawer>
      </div>
    );
  }
}



export default withStyles(styles)(DrawerParams);