import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { languageChange } from '../../AC'
import { withStyles } from '@material-ui/core/styles';
import { IconButton, MenuItem, Menu, Typography, Hidden, Tooltip, Button, withWidth } from '@material-ui/core'
import { Language } from '@material-ui/icons'
import classnames from 'classnames'

const styles = {
  circled: {
    minWidth: 48,
    height: 48,
    borderRadius: '50%'
  },
};

const options = [
  'Russian',
  'English',
];

class Choicelanguage extends React.Component {

  state = {
    anchorEl: null,
    selectedIndex: 1,
  };

  componentDidMount() {
    options[this.state.selectedIndex]
    this.props.languageChange(options[this.state.selectedIndex])
  }

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
    const { classes, width } = this.props
    const { anchorEl } = this.state;
    const languageWord = () => {
      const lang = options[this.state.selectedIndex].toUpperCase().substring(0, 3)
      return lang
    }
    return (
      <div>


        <Tooltip title={languageWord()}>
          <Button
            size="small"

            className={classnames({
              [classes.circled]: width === 'sm' || width === 'xs'
            })}
            color='inherit'
            onClick={this.handleClickListItem}
          >
            <Hidden smDown>
              <Typography variant="body2" component='span' style={{
                display: 'inline-block', verticalAlign: 'middle', paddingRight: 10
              }} color='inherit'>
                {languageWord()}
              </Typography>
            </Hidden>
            <Language />
          </Button>
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



export default compose(
  withStyles(styles),
  withWidth(),
  connect(
    null,
    { languageChange }
  )
)(Choicelanguage);