import React from 'react';


import { IconButton, MenuItem, Menu, Typography, Hidden, Tooltip } from '@material-ui/core'
import { Language } from '@material-ui/icons'


const options = [
  'Russian',
  'English',
];

class Choicelanguage extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 1,
  };



  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const languageWord = () => options[this.state.selectedIndex].toUpperCase().substring(0, 3)
    return (
      <div>

        <Hidden mdDown>
          <Typography variant="body2" component='span' style={{
            display: 'inline-block', verticalAlign: 'middle'
          }} color='inherit'>
            {languageWord()}
          </Typography>
        </Hidden>
        <Tooltip title={languageWord()}>
          <IconButton
            color='inherit'
            onClick={this.handleClickListItem}
          >
            <Language />
          </IconButton>
        </Tooltip>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}



export default Choicelanguage;